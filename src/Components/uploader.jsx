import React, {Component} from 'react';
import {storage} from './firebase';

class Uploader extends Component{
  state = {
    image:null,
    url:'',
    progress:0
  }

  handleChange = e =>{
    if(e.target.files[0]){
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () =>{
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', (snapshot) =>{
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100);
      this.setState({progress})
    }, (error) => {
      console.log(error);
    }, () =>{
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        console.log(url);
        this.setState({url})
      })
    });
  }

  render(){
    return(
      <div>
        
        <progress value={this.state.progress} max='100' />
        <br />
        <input type='file' onChange={this.handleChange}></input>
        <button onClick={this.handleUpload}>Upload</button>
        <br />
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt={this.state.url}></img>
      </div>
    )
  }
}

export default Uploader;
