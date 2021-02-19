import React from "react";
import {addMonths} from 'date-fns'
import style from '../calendar/calendar.module.css';
import CurrentDay from './current-day';
import CurrentCalendarBody from './current-calendar-body';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(),
      
    };
  }
  handlePrevMounth=()=>{
    this.setState({day: addMonths(this.state.day, -1)})
  }
  handleNextMounth=()=>{
    this.setState({day:addMonths(this.state.day, 1)})
  }

  
  render() {
    const {day}=this.state;
    return (
      <section className ={style.calendarContainer}>
        <CurrentDay day={day}/>
        <CurrentCalendarBody 
          day = {day} 
          handlePrev = {this.handlePrevMounth} 
          handleNext={this.handleNextMounth}/>
      </section>
    );
  }
}

export default Calendar;
