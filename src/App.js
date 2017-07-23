import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




//自定义组件
import Redux1Component from './components/Redux1/'
import BrotherComponent from './components/Brother/'

import Redux2Component from './components/Redux2/'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
             {/* <Redux1Component></Redux1Component>
            <BrotherComponent></BrotherComponent>  */}
             <Redux2Component></Redux2Component> 
          </p>
        </div>
    );
  }
}

export default App;
