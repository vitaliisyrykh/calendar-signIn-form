import{Component} from 'react';
import{format} from 'date-fns';

class MounthYear extends Component {
  constructor(props) {
    super(props)

  }

  render(){
    const {day}=this.props

    return(
      <h1>{format(day, 'MMMM yyyy')}</h1>
    )
  }
}
export default MounthYear;