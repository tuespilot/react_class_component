import React, { useState } from 'react';
import './App.css';

function AppOnChangeFunc() {
    const [fullname, setFullname] = useState("");

    function fullnameChange(e) {
        setFullname(e.target.value);

    }

    return (
        <div className="App">
            <hr></hr>
            <div>App on Change Func</div>
            <p>Name-SurName : {fullname}</p>
            <input type="text" value={fullname} onChange={fullnameChange} />
        </div>
    )
}

export default AppOnChangeFunc;