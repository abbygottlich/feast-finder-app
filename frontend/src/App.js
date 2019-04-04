import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import City from "./components/City";
import State from "./components/State";
import findState from "./components/Finder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <City />
          <State />
          <button onClick={findState}>Find a Feast!</button>
        </header>
      </div>
    );
  }
}

export default App;
