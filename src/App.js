import React, { Component } from 'react';
import './App.css';
import List from './components/List/list.jsx';
import Add from './components/List/add.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo - List</h2>
        <Add/>
        <List/>
      </div>
    );
  }
}

export default App;
