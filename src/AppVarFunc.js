import React, { Component } from 'react';
import './App.css';

class AppVarFunc extends Component {
    constructor(){
        super();
        this.state = {
            data:0
        }
       
    };
    
   
    addData = () => {
        this.setState(d => (
            {
                data: d.data+1
            }
        ))
    }

    render(){
        return(
            <div className="App">
                <hr></hr>
                <p>Current Data : {this.state.data}</p>
                <button onClick={this.addData}>Click</button>
            </div>
            
        );
    }

}

export default AppVarFunc;