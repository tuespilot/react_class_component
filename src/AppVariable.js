import React, { Component } from 'react';
import './App.css';
class AppVariable extends Component {
    constructor(){
        super();
        this.state = {
            data: 0
        };
    }

    render(){
        return(
            
            <div className="App">
                <hr></hr>
                <p>ข้อมูลปัจจุบัน : {this.state.data}</p>
                <button onClick={() => this.setState({data:this.state.data+1})}>Click</button>

            </div>

        );
    }
}

export default AppVariable;