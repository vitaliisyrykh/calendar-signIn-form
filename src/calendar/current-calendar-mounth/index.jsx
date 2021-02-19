import {Component} from 'react';
import MounthYear from './mounth-year';


class CurrentCalendarDay extends Component{
  constructor(props){
    super(props)
    this.state={
    
    }
  }
  weekDays=()=>{
    return(
      <div>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sun</div>
      </div>
    )
  }
    render(){
      return(
        <div>
          <MounthYear day={this.props.day}/>
          
        </div>
      )
    }
}
export default CurrentCalendarDay ;