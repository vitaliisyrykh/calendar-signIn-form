import {Component} from 'react';
import {format,isToday,isSameMonth} from 'date-fns';
import cx from 'classnames';
import styles from'./day.module.scss'
import PropTypes from 'prop-types';
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
Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date).isRequired,
};

export default Day;