import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Row, Col, Alert } from "react-bootstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class SignUpSignIn extends Component {

  renderError() {
    return (
      <Alert bsStyle="danger">
        <strong>{this.props.error}</strong>
      </Alert>
    );
  }

  render() {
    return (
      <Row>
        <Col xs={8} >
          {this.props.error && this.renderError()}
          <div className="login-page">
            <div className="welcome">Welcome to Feast Finder!</div>
            <div className="login-sections">
              <div className="signin-section">
                <SignIn onSignIn={this.props.onSignIn} />
              </div>
              <div className="signup-section">
                <SignUp onSignUp={this.props.onSignUp} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

SignUpSignIn.propTypes = {
  error: PropTypes.string,
  onSignUp: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired
};

export default SignUpSignIn;
