import{Component} from 'react';
import Week from '../week'

class Month extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {year, month, day}=this.props;
    return(
      <Week/>
    )
  }
}
export default Month;