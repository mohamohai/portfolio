import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import UserAdd       from './Components/UserAdd.js';
import SelectUser    from './Components/SelectUser';
import DeleteUser    from './Components/DeleteUser';
import UpdateUser    from './Components/UpdateUser';
import SchedulePop   from './Components/SchedulePop';
import SignUp        from './Components/SignUp';

import DivClear      from './mainContents/divClear';
import axios         from 'axios';

import PopupDom from './PopupDom';
import { Calendar } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  
import Home from './inc/home.js';
import Test from './inc/test.js';
import TestTwo from './inc/testTwo.js';

import { BrowserRouter, Link } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





class App extends Component{
    
   
    
  render(){
  
    return(
<BrowserRouter>
      <Router>
        <Routes>
          <Route path="/"        Component={Home}></Route>
          <Route path="/test"    Component={Test} ></Route>
        </Routes>
      </Router>
          
      </BrowserRouter>

       
 
      
    );
  }
}  
export default App;
