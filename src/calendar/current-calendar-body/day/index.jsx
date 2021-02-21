import {Component} from 'react';
import {format,isToday,isSameMonth} from 'date-fns';
import cx from 'classnames';
import styles from'./day.module.scss'
class Day extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const {day,currentDay}=this.props;
    
    const classNames = cx(styles.day, {
      [styles.currentMonthDay]: isSameMonth(day,currentDay),
      [styles.currentDay]: isToday(day),
    });

    return(
      <p className={classNames}>{format(day, 'd')}</p>
    )
  }
}


export default Day;