import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Courses from './containers/Courses/Courses';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Courses />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
