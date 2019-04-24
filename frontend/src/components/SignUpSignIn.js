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
          <Tabs defaultActiveKey={1} id="signup-signin-tabs">
            <Tab eventKey={1}>
              <SignUp onSignUp={this.props.onSignUp} />
            </Tab>
            <Tab eventKey={2}>
              <SignIn onSignIn={this.props.onSignIn} />
            </Tab>
          </Tabs>
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
