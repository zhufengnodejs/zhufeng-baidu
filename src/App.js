import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container">
         <h1 className="title">我的百度</h1>
         <div className="search">
             <input type="text"/>
             <button>百度一下</button>
         </div>
         <div className="suggest">
            <ul>
                <li>react middleware</li>
                <li>react middleware</li>
                <li>react middleware</li>
                <li>react middleware</li>
                <li>react middleware</li>
            </ul>
         </div>
      </div>
    );
  }
}

export default App;
