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
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {

      fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignIn = (credentials) => {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: 'Must Provide All Fields',
      });
    } else {
      fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
        .then((res) => {
          if (res.status === 401) {
            console.log('invalid login');
            this.setState({
              signUpSignInError: 'Invalid login.',
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          const { token } = data;
          localStorage.setItem('token', token);
          this.setState({
            signUpSignInError: '',
            authenticated: token,
          });
        });
    }
  }

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
    console.log("handle sign out")
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

      <Router>
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
