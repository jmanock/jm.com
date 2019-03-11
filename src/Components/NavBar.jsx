import React,{Component} from 'react';
import Logo from './Images/CFTVLogo.png';

class Navbar extends Component{
  state = {
    auth:false,
    slide:0,
    lastScrollY:0
  };

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>{
    const {lastScrollY} = this.state;
    const currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY){
      this.setState({slide:'-48px'});
    }else{
      this.setState({slide:'0px'});
    }
    this.setState({lastScrollY:currentScrollY});
  };

  render(){
    return(
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{transform:`translate(0,${this.state.slide})`, transition:'transform 90ms linear'}}>
        <span className='navbar-brand'><img src={Logo} className='logo' alt='logo'></img></span>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'><a href='#a' className='nav-link'>Something</a></li>
            <li className='nav-item'><a href='#b' className='nav-link'>Else</a></li>
            <li className='nav-item'><a href='#c' className='nav-link'>Goes</a></li>
            <li className='nav-item'><a href='#d' className='nav-link'>Here</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
