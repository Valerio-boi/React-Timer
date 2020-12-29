
import './App.css';
import React, { Component } from 'react';
import Timer from './timer'

class App extends Component {

 render() {

  return (
    <React.Fragment>

    <div className="App">
      <header className="App-header">
        
      <Timer />

      </header>
    </div>

    </React.Fragment>
  );
  
 }

}

export default App;
