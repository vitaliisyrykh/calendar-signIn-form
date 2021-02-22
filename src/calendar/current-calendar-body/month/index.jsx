import{Component} from 'react';
import {getWeek,parse,getWeeksInMonth,addWeeks} from 'date-fns';
import Week from '../week';
import PropTypes from 'prop-types';



class Month extends Component {
  
  
  render(){
    const { year, month,day } = this.props;
    
    const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());
    const weekAmount = getWeeksInMonth(startOfMonth)
    const weeksArray =[];
    
    for (var w = 0; w<weekAmount; w++) {
      weeksArray.push(<Week key = {`${w}-${year}-${month}`} year ={year} month={month} day={day} week={getWeek(addWeeks(startOfMonth, w))}/>);
    }
    
    return( 
        <section>
          {[weeksArray]}
        </section>
    )  
}}
Month.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  year:PropTypes.number.isRequired,
  month:PropTypes.number.isRequired
};
  export default Month;