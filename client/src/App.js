import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import SelectSchedule from './Components/ScheduleSelect';
import ScheduleAdd from './Components/ScheduleAdd';
import UserSelect from './Components/UserSelect';
import UserDelete from './Components/UserDelete'

import SignUp from './Components/SignUp';

import Home from './inc/home.js';
import Test from './inc/test.js';
import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





class App extends Component{
    
   
    
  render(){
  
    return(
 
      <div>
      <GNB></GNB>
      <SignUp></SignUp>
      <ScheduleAdd></ScheduleAdd>
      <UserSelect></UserSelect>


       </div>
 
      
    );
  }
}  
export default App;
