import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppVariable from './AppVariable';
import AppVarFunc from './AppVarFunc';

import AppClassComp from './AppClassComp';
import AppFuncComp from './AppFuncComp';

import AppOnChangeClass from './AppOnChangeClass';
import AppOnChangeFunc from'./AppOnChangeFunc';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <AppVariable />
    <AppVarFunc /> */}

    <AppClassComp />
    {/* <AppFuncComp /> */}

    <AppOnChangeClass />
    {/* <AppOnChangeFunc /> */}


  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
