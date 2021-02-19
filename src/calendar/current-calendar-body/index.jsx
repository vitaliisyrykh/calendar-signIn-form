import {Component} from 'react';
import style from './current-calendar-body.module.scss'
import MounthYear from './mounth-year';

class CurrentCalendarDay extends Component{
  constructor(props){
    super(props)
    this.state={
    
    }
  }
  weekDays=(props)=>{
    return(
      <section className = {style.weekDaysContainer}>
        <div className={style.weekDay}>Sun</div>
        <div className={style.weekDay}>Mon</div>
        <div className={style.weekDay}>Tue</div>
        <div className={style.weekDay}>Wed</div>
        <div className={style.weekDay}>Thu</div>
        <div className={style.weekDay}>Fri</div>
        <div className={style.weekDay}>Sut</div>
      </section>
    )
  }
    render(){
      return(
        <div className={style.bodyContainer}>
          <MounthYear 
          day={this.props.day} 
          handlePrev={this.props.handlePrev} 
          handleNext = {this.props.handleNext}/>
          {this.weekDays()}
          {/* <CalendarDays/> */}
        </div>
      )
    }
}
export default CurrentCalendarDay ;