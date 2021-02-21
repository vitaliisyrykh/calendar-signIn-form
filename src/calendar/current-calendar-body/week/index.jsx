import {Component} from 'react';
import{parse, addDays} from 'date-fns';
import style from '../week/week.module.scss';
import Day from '../day'

class Week extends Component {
  render() {
    const {year, week, day}=this.props;
    const startOfWeekq = parse(`${year} ${week}`, 'Y w', new Date());
    const dayArray= [];
    [1,2,3,4,5,6,7].map((d)=>{

      dayArray.push(<Day key={`${d}-${year}-${week}`} day={addDays(startOfWeekq,d)} currentDay={day}/>)
    });
    
    return(
      <div className={style.weekContainer}>{[dayArray]}</div>
    )
  }
}
export default Week;