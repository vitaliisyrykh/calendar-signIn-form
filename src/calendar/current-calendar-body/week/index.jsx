import {Component} from 'react';
import{parse, addDays} from 'date-fns';
import style from '../week/week.module.scss';
import Day from '../day'

class Week extends Component {
  render() {
    const {year, week,}=this.props;
    const startOfWeekq = parse(`${year} ${week}`, 'Y w', new Date());
    const dayArray= [];
    [1,2,3,4,5,6,7].map((day)=>{

      dayArray.push(<Day key={`${day}-${year}-${week}`} day={addDays(startOfWeekq,day)} currentDay={this.props.day}/>)
    });
    
    return(
      <div className={style.weekContainer}>{[dayArray]}</div>
    )
  }
}
export default Week;