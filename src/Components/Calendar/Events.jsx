import React, {Component} from 'react';
import {Calendar} from 'calendar-base';
import CalendarDay from './CalendarDay';
import CalendarEvent from './CalendarEvent';
import CalendarTitle from './CalendarTitle';

class Events extends Component{
  state = {
    today:this.getToday()
  }

  calendar = new Calendar({siblingMonths:true});

  getToday(){
    var today = new Date();
    return{
      day:today.getDate(),
      month:today.getMonth(),
      year:today.getFullYear()
    };
  }

  getCalendarDays(){
    return this.calendar.getCalendar(this.props.year, this.props.month).map((day) =>{
      day.eventSlots = Array(this.props.maxEventSlots).fill(false);
      return day;
    });
  }

  getEventMeta(days, eventStart, eventEnd){
    const eventStartInView = this.calendar.isDateSelected(eventStart);
    const eventEndInView = this.calendar.isDateSelected(eventEnd);
    const firstDayOfMonth = days[0];
    const lastDayOfMonth = days[days.lenght -1];
    const eventMeta = {
      isVisibleInView:false,
      visibleEventLength:days.length,
      firstVisibleDayIndex:eventStartInView ? Calendar.interval(firstDayOfMonth, eventStart) -1 : 0
    };

    if(eventStartInView || eventEndInView){
      eventMeta.isVisibleInView = true;
    }else if(eventStart.month < this.props.month && eventEnd.month > this.props.month){
      eventMeta.isVisibleInView = true;
    }

    if(eventStartInView && eventEndInView){
      eventMeta.visibleEventLength = Calendar.interval(eventStart, eventEnd);
    }else if(!eventStartInView && eventEndInView){
      eventMeta.visibleEventLength = Calendar.interval(firstDayOfMonth, eventEnd);
    }else if(eventStartInView && !eventEndInView){
      eventMeta.visibleEventLength = Calendar.interval(eventStart, lastDayOfMonth);
    }
    return eventMeta;
  }

  getDaysWithEvents(){
    
  }
}
