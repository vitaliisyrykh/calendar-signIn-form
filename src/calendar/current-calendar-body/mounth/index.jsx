import{Component} from 'react';
import {getWeek,parse,getWeeksInMonth,addWeeks} from 'date-fns';
import Week from '../week';


class Month extends Component {
  
  
  render(){
    const { year, month,day } = this.props;
    
    const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());
    const weekAmount = getWeeksInMonth(startOfMonth, 1)
    const weeksArray =[];
    
    for (var w = 0; w<weekAmount; w++) {
      weeksArray.push(<Week year ={year} month={month} day={day} week={getWeek(addWeeks(startOfMonth, w))}/>);
    }
    
    return( 
        <div>
          {[weeksArray]}
        </div>
    )  
}}
  export default Month;