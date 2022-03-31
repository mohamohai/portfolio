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

import { BrowserRouter, Route, Switch } from "react-router-dom";




class App extends Component{
    
   
    
  render(){
  
    return(
 
      <div>
     

    <BrowserRouter>
    <GNB></GNB>
        <Route exact path="/" component={UserSelect} />
        <Route path="/about" component={Home} />
        <Route path="/SignUp" component={SignUp} />
    </BrowserRouter>

       </div>
 
      
    );
  }
}  
export default App;
