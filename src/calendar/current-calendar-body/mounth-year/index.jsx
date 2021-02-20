import{Component} from 'react';
import{format} from 'date-fns';
import style from '../mounth-year/mouthYear.module.scss';

class MounthYear extends Component {
  constructor(props) {
    super(props)

  }
  

  render(){
    const {day}=this.props

    return(
        <div className = {style.container}>
          <button className={style.btn} onClick = {this.props.handlePrev}>Prev</button>
          <h1>{format(day, 'MMMM yyyy')}</h1>
          <button className={style.btn} onClick ={this.props.handleNext}>Next</button>
        </div>  
    )
  }
}
export default MounthYear;