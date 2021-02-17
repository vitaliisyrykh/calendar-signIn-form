import React, { Component } from "react";
import styles from "./input-form.module.css";
import cx from 'classnames';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <input
          onChange={this.handleChange}
          value={email}
          placeholder="Email"
          type="email"
          name="email"
        ></input>
        <input
          onChange={this.handleChange}
          value={password}
          placeholder="Password"
          type="password"
          name="password"
        ></input>
        <input type='submit'></input>
      </form>
    );
  }
}
export default InputForm;