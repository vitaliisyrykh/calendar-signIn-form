import {Component} from 'react';
import {format} from 'date-fns';
import style from '../current-day/current-day.module.scss';

class CurrentDay extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {day}=this.props
    return(
      <section className={style.currentDayContainer}>
      <h3 className = {style.dayName}>{format(day, 'EEEE')}</h3>
      <h1 className = {style.dayNumber}>{format(day, 'd')}</h1>
      </section>
    )
  }
}

export default CurrentDay;