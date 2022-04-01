import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import SelectSchedule from './Components/ScheduleSelect';
import ScheduleAdd from './Components/ScheduleAdd';
import UserSelect from './Components/UserSelect';
import UserDelete from './Components/UserDelete'

import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';


import { BrowserRouter, Route, Switch } from "react-router-dom";




class App extends Component{
    
   
    
  render(){
  
    return(
 
      <div>
     

    <BrowserRouter>
    <GNB></GNB>
        <Route exact path="/" component={UserSelect} />

        <Route path="/SignIn" component={SignIn} />
    </BrowserRouter>

       </div>
 
      
    );
  }
}  
export default App;
