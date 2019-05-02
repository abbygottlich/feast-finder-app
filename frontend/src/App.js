import React, { Component } from 'react';
import './App.css';
import SignUpSignIn from "./components/SignUpSignIn";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Dislikes from "./components/Dislikes";

class App extends Component {

  state = {
    signUpSignInError: "",
    authenticated: localStorage.getItem("token") || false
  }

  handleSignUp = (credentials) => {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      this.setState({
        signUpSignInError: "Please provide all fields."
      });
    } else if (password.trim() !== confirmPassword.trim()) {
      this.setState({
        signUpSignInError: "Passwords do not match."
      });
    } else {
      this.setState({
        signUpSignInError: 'Loading...',
      })
      // ${process.env.REACT_APP_API_URL}
      fetch(`/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      })
        .then((res) => {
          if (res.status === 422) {
            res.json()
              .then(
                (err) => {
                  console.log('username already exists', err);
                  this.setState({
                    signUpSignInError: err.error
                  });
                }
              )
          } else {
            res.json().then(
              (token) => {
                localStorage.setItem('token', token);
                this.setState({
                  signUpSignInError: '',
                  authenticated: token,
                });
              }
            )
          }
        })
    }
  }

  handleSignIn = (credentials) => {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: 'Please provide all fields.',
      });
    } else {
      this.setState({
        signUpSignInError: 'Loading...',
      })
      // ${process.env.REACT_APP_API_URL}
      fetch(`/api/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
        .then((res) => {
          if (res.status === 401) {
            res.json().then(
              (err) => {
                console.log('invalid login', err);
                this.setState({
                  signUpSignInError: err.error,
                });
              }
            )
          } else {
            res.json().then(
              (data) => {
                const token = data.token
                localStorage.setItem('token', token);
                this.setState({
                  signUpSignInError: '',
                  authenticated: token,
                });
              }
            )
          }
        })
    };
  }

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn = () => {
    return (
      <SignUpSignIn
        error={this.state.signUpSignInError}
        onSignUp={this.handleSignUp}
        onSignIn={this.handleSignIn}
      />
    );
  }

  renderApp() {
    return (

      <Router basename={process.env.REACT_APP_BASENAME}>
        <div>
          <Route exact path="/" component={() => <Home onSignOut={this.handleSignOut} authenticated={this.state.authenticated} />} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/dislikes" component={Dislikes} />
        </div>
      </Router>
    );
  }

  render() {
    let whatToShow = null;
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }

    return whatToShow;

  }
}

export default App;
