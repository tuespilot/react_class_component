import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
 render() {

  const txtStyle = {
    color:'white', 
    backgroundColor: 'green',

  };

  const fullname = 'Nikom Jaimun';

   return (
     <div className="App">
       <h1 style={txtStyle}>สวัสดี Class Component</h1>
       <p>{fullname}</p>
       <br></br>
       <Home name="My Mother Home" address="Bangkok" />

     </div>
   )
 }
}

export default App;
