import { Component } from "react";
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  handleAdd = () => {
    this.setState((state, props) => {
      return { count: state.count + props.newCount };
    });
  };
  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };
  handleRemove = () => {
    this.setState((state, props) => {
      if (state.count <= 0) {
        state.count = 0;
      }else{
        return { count: state.count - props.newCount };
      }
    });
  };
  render() {
    const { count, isAdd } = this.state;
    const { newCount } = this.props;

    return (
      <div>
        <div>Count:{count}</div>
        <div>Add:{newCount}</div>
        <button onClick={isAdd ? this.handleAdd : this.handleRemove}>
          {isAdd ? "Add" : "Remove"}
        </button>
        <button onClick={this.changeMode}>Change Mode</button>
      </div>
    );
  }
}
 Counter.propTypes = {
   newCount:PropTypes.number.isRequired,
  }; 

export default Counter;
