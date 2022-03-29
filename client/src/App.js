import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import SelectSchedule from './Components/SelectSchedule';
import ScheduleAdd from './Components/ScheduleAdd';
import SelectUser from './Components/SelectUser';

import UserAdd from './Components/UserAdd';

import Home from './inc/home.js';
import Test from './inc/test.js';
import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





class App extends Component{
    
   
    
  render(){
  
    return(
 
      <div>
        <GNB></GNB>
    
       
        <SelectUser/><br></br>
        
        <br></br><UserAdd></UserAdd>
       
      </div>



       
 
      
    );
  }
}  
export default App;
