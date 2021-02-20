import {Component} from 'react';
import {format} from 'date-fns';
class Day extends Component {
  constructor(props) {
    super(props)
  }
  
  
  render(){
    const {day}=this.props;
    return(
      <p>{format(day, 'd')}</p>
    )
  }
}

export default Day;