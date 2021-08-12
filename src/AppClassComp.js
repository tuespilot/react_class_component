import React, { Component } from 'react'
import './App.css';
class AppClassComp extends Component {
    constructor() {
        super();
        this.state = { 
            cmdText : "สวัสดี React", 
            intVar : 22,
        };

         this.setBtnOnClick = this.setTextOnBt.bind(this);
    }

    setTextOnBt() {
        // this.setState(() => {
        //     return { cmdText : "ปุ่ม Button ถูกกด", intVar : this.state.intVar+1 };
        // });

        // ใช้แบบสั้นก็ได้
        this.setState({cmdText:`ปุ่ม Button ถูกกดไป ${this.state.intVar}`, intVar: this.state.intVar+1})
    }

    render(){
        const { cmdText, intVar } = this.state;
        return (
            <div className="App">
                <hr></hr>
                <div>App Class Component</div>
                 {/* <button onClick={this.setTextOnButton}>{cmdText}</button> */}
                 <button onClick={this.setBtnOnClick}>{cmdText}</button>
                <div>{intVar}</div>
            </div>
           
        );
    }

}

export default AppClassComp;