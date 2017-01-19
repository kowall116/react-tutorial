import React, { Component } from 'react';
import Welcome from './Welcome';
import Counter from './Counter'
import Clock from './Clock';
import List from './List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const user = 'Kevin'
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome user={user}/>
        <Counter />
        <Clock />
        <List />
      </div>
    );
  }
}

export default App;
