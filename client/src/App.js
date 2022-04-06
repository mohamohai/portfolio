import { Component } from 'react';

import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import GnbT from './mainContents/GnbT';
import SelectSchedule from './Components/Schedule/ScheduleSelect';
import ScheduleAdd from './Components/Schedule/ScheduleAdd';
import UserSelect from './Components/User/UserSelect';
import UserDelete from './Components/User/UserDelete'

import SignUp from './Components/Sign/SignUp';
import SignIn from './Components/Sign/SignIn';


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
      <GnbT></GnbT>
       </div>
 
      
    );
  }
}  
export default App;
