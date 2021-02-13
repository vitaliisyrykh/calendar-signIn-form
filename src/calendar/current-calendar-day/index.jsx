import {Component} from 'react';

class CurrentCalendarDay extends Component{
  constructor(props){
    super(props)
    this.state={
      date:this.props.date.toString(),
    }
  };
  tick = () => {
    const { date } = this.state;
    date.setSeconds(date.getSeconds() + 1);
    this.setState({ date });
  };

  render(){
    console.dir(this.state.date)
    //let options ={weekday:'long'}
    //let day = new Intl.DateTimeFormat('en-US', options).format(this.state.date);
    return (
      <>
        <h1></h1>
        <p>{this.state.date.toString()}</p> 
      </>
    )
  }
}
export default CurrentCalendarDay ;