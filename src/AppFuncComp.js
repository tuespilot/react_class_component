import React, { useState } from 'react';
import './App.css';

function AppFuncComp() {
    const [cmdText, setcmdText] = useState("สวัสดี React FuncComp");

    function setTextOnButton() {
        return setcmdText("ปุ่ม Button FuncComp ถูกคลิก");
    }

    return (
        <div className="App">
            <hr></hr>
            <div>App Function Component</div>
            <button onClick={setTextOnButton}>{cmdText}</button>

        </div>
    );

}

export default AppFuncComp;