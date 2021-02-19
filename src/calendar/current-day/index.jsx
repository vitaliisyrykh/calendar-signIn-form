import {Component} from 'react';
import {format} from 'date-fns';
import style from '../current-day/current-day.module.css';

class CurrentDay extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {day}=this.props
    return(
      <div className={style.currentDayContainer}>
      <h3 className = {style.dayString}>{format(day, 'EEEE')}</h3>
      <h1 className = {style.dayNumber}>{format(day, 'd')}</h1>
      </div>
    )
  }
}

export default CurrentDay;