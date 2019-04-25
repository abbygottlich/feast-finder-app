import React, { Component } from "react";
import PropTypes from "prop-types";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
        <div className="title">Sign Up</div>
        <input type="email" name="username" placeholder="Username" className="username-input"
          onChange={e => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          value={this.state.username}
        >
        </input>
        <input
          type="password" name="password" placeholder="Password" className="password-input"
          onChange={e => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          value={this.state.password}
        >
        </input>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="confirm-password-input"
          onChange={e => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          value={this.state.confirmPassword}
        >
        </input>
        <button className="login-button" type="submit">Sign Up</button>
      </form>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
