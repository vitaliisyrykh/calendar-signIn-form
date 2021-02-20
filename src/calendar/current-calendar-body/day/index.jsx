import {Component} from 'react';
import {format} from 'date-fns';
import styles from'./day.module.scss'
class Day extends Component {
  constructor(props) {
    super(props)
  }
  
  
  render(){
    const {day}=this.props;
    return(
      <p className={styles.dayContainer}>{format(day, 'd')}</p>
    )
  }
}

export default Day;