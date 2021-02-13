import React from 'react';
import CurrentCalendarDay from './current-calendar-day'


const date = new Date();
class Calendar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      date:date,
    }
  }
  
  render(){
    return(
      <>
        <CurrentCalendarDay date={this.state.date}/>
        {/* <CurrentCalendarMounth/>  */}
      </>
    )
  }
}

export default Calendar;