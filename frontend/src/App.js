import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import RestaurantInfoContainer from "./Containers/RestaurantInfoContainer";
// import Login from "./components/Login";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <RestaurantInfoContainer />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
