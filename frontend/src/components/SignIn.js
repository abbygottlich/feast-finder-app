import React, { Component } from "react";
import PropTypes from "prop-types";
// import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            // confirmPassword: "",
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');
        this.props.onSignIn({
            username: this.state.username,
            password: this.state.password,
            // confirmPassword: this.state.confirmPassword
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>Username</div>
                <input type="email" name="username" placeholder="Username" className="username-input"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.username}
                >
                </input>

                <div>Password</div>
                <input type="password" name="password" placeholder="Password" className="password-input"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.password}
                >
                </input>

                {/* <FormGroup>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
          />
        </FormGroup> */}

                <button type="submit">
                    Sign In
       </button>
            </form>
        );
    }
}

SignIn.propTypes = {
    onSignIn: PropTypes.func.isRequired
};

export default SignIn;