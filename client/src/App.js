import { Component } from 'react';

import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import GnbT from './mainContents/GnbT';
import ScheduleSelect from './Components/Schedule/ScheduleSelect';
import ScheduleAdd from './Components/Schedule/ScheduleAdd';


import UserSelect from './Components/User/UserSelect';
import UserDelete from './Components/User/UserDelete';
import SideBar from './Components/SideMenu/SideBar';
import SignUp from './Components/Sign/SignUp';
import SignIn from './Components/Sign/SignIn';

import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component{
    
   
    
  render(){
  

    return(
 
      <div>
      <SideBar></SideBar>
      <GnbT></GnbT>
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
