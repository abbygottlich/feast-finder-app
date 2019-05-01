import React, { Component } from "react";
import PropTypes from "prop-types";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            loadingMessage: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSignIn({
            username: this.state.username,
            password: this.state.password
        })
        this.setState({
            loadingMessage: true
        })
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
                <div className="title">Sign In</div>
                <input type="email" name="username" placeholder="Username" className="username-input"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.username}
                >
                </input>
                <input type="password" name="password" placeholder="Password" className="password-input"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.password}
                >
                </input>
                <button className="login-button" type="submit">Sign In</button>
                {this.state.loadingMessage ? <div className="sign-up-sign-in-loader">loading...</div> : null}
            </form>
        );
    }
}

SignIn.propTypes = {
    onSignIn: PropTypes.func.isRequired
};

export default SignIn;