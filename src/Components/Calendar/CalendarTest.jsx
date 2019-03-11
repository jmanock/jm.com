import React,{Component} from 'react';
import Events from './Events';
import moment from 'moment';
import Data from './Data';
import {Row, Button, ButtonGroup, Overlay, Popover, Modal, Container} from 'react-bootstrap';

class CalendarTest extends Component{
  state = {
    moment:moment(),
    showPopover:false,
    showModal:false,
    overlayTitle:null,
    overlayContent:null,
    popoverTarget:null,
    overlayLink:null,
    overlayTime:null,
    overlayWhere:null
  };

  handleNextMonth = () =>{
    this.setState({
      moment:this.state.moment.add(1,'M')
    });
  }

  handlePreviousMonth = () =>{
    this.setState({
      moment:this.state.moment.subtract(1,'M')
    });
  }

  handleToday = () =>{
    this.setState({
      moment:moment()
    });
  }

  handleEventClick = (target, eventData, day) =>{
    this.setState({
      showPopover:false,
      showModal:true,
      overlayTitle:eventData.title,
      overlayContent:eventData.description,
      overlayWhere:eventData.where,
      overlayTime:eventData.time,
      overlayLink:eventData.link
    });
  }

  getMomentFromDay(day){
    return moment().set({
      'year':day.year,
      'month':(day.month+0)%12,
      'date':day.day
    });
  }

  handleModalClose = () =>{
    this.setState({
      showModal:false
    });
  }

  getHumanDate(){
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
  }

  render(){
    return(
      <div>
        <Overlay show={this.state.showPopover} rootClose onHide={() => this.setState({showPopover:false})} placement='top' container={this} target={this.state.popoverTarget}>
          <Popover id='event'>{this.state.overlayTitle}</Popover>
        </Overlay>

        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.overlayTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='eventWhere'>{this.state.overlayWhere}</span> <br />
            <span className='eventTime'>{this.state.overlayTime}</span> <br />
            <span className='eventDes'>{this.state.overlayContent}</span> <br />
            <a href={`${this.state.overlayLink}`} target='_blank' rel='noopener noreferrer'>More Info</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Container>
          <Row>
            <ButtonGroup>
              <Button variant='primary' onClick={this.handlePreviousMonth}>&lt;</Button>
              <h1 style={{color:'orange'}}>{this.getHumanDate()}</h1>
              <Button variant='secondary' onClick={this.handleNextMonth}>&gt;</Button>
            </ButtonGroup>
            <Events month={this.state.moment.month()} year={this.state.moment.year()} events={Data.getEvents()} onEventClick={this.handleEventClick} maxEventSlots={10} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default CalendarTest;
