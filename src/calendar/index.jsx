import React from "react";
import { format } from "date-fns";
import style from '../calendar/calendar.module.css';
import CurrentDay from './current-day';
import CurrentCalendarMounth from './current-calendar-mounth';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(),
    };
  }
  
  render() {
    const {day}=this.state;
    return (
      <div className ={style.calendarContainer}>
        <CurrentDay day={day}/>
        <CurrentCalendarMounth day = {day}/>
      </div>
    );
  }
}

export default Calendar;
