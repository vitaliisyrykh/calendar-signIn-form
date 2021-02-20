import {Component} from 'react';
import{parse} from 'date-fns';
import Day from '../day'

class Week extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    const {year, week}=this.props;
    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
    const dayArray=[];
    dayArray.map((day)=>{
      dayArray.push(<Day key={`${day}${year}-${week}`} day={startOfWeek,day}/>)
    })
    console.log(dayArray);
    return(
      <div>{[dayArray]}</div>
    )
  }
}
export default Week;