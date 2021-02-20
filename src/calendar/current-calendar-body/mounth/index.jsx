import{Component} from 'react';
import {getWeek,parse,getWeeksInMonth} from 'date-fns';
import Week from '../week'


class Month extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const { year, month,day } = this.props;

  const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());
  const weekAmount = getWeeksInMonth(startOfMonth);
  const weeksArray =[];
    Array.apply(null, {length: weekAmount}).map(w => {
        //const startOfWeek = 
        weeksArray.push(<Week year = {year} month={month} day={day} week={w}/>)
       
    })
    
    return <>gsgsg{[weeksArray]}</>
      
    
  }
}
export default Month;