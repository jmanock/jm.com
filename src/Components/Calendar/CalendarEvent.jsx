import React,{Component} from 'react';
import classnames from 'classnames';

class CalendarEvent extends Component{
  sharedArguments = [null, this, this.props.eventData, this.props.day];

  componentWillReceiveProps(nextProps){
    this.sharedArguments = [null, this, nextProps.eventData, nextProps.day];
  }

  handleClick = (e) =>{
    this.props.onClick(...this.sharedArguments.slice(1));
    e.stopPropagation();
  }

  render(){
    if(!this.props.eventData){
      return <div className='event-slot'></div>
    }

    const showLabel = this.props.eventData.isFirstDay || (this.props.day.weekDay === 0 && this.props.wrapTitle);
    const title = showLabel ? this.props.eventData.title : '';
    const eventClass = classnames({
      'event-slot':true,
      'event':true,
      'event-first-day':this.props.eventData.isFirstDay,
      'event-last-day':this.props.eventData.isLastDay,
      'event-has-label':showLabel
    }, this.props.eventData.eventClasses);

    return(
      <div className={eventClass} onClick={this.handleClick}>
        <div className='event-title'>
          {title}
        </div>
      </div>
    );
  }
}

CalendarEvent.defaultProps = {
  onClick:() => {}
}

export default CalendarEvent;
