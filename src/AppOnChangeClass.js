import React, { Component } from 'react';
import './App.css';

class AppOnChangeClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname : '',

        };
        this.fullnameChange = this.fullnameChange.bind(this);
    }

    fullnameChange(e) {

        // this.setState(() => {
        //     return { fullname : e.target.value}
        // });

        // ใช้แบบสั้นก็ได้
        this.setState({fullname : e.target.value});
    }




    render(){
        const { fullname } = this.state;
        return (
            <div className="App">
                <hr></hr>
                <div>App on Change Class</div>
                <p>ชื่อ-สกุล : {fullname}</p>
                <input type="text" value={fullname} onChange={this.fullnameChange} />
            </div>
        )

    }


}

export default AppOnChangeClass;