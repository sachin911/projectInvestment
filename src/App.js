import React, { Component } from 'react';

import SliderComp from './components/Slider';
import './App.css';

class App extends Component {
  render() {
    console.log("in the app");
    return (
      <div className="App">
        <div className="App-header">
          <h2>Investment Strategy</h2>
        </div>
        <SliderComp />
      </div>
    );
  }
}

export default App;
