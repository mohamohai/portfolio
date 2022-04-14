import { Component } from 'react';

import React, {useState}         from 'react';

import GNB            from './mainContents/GNB';
import GnbT           from './mainContents/GnbT';
import ScheduleSelect from './Components/Schedule/ScheduleSelect';
import ScheduleAdd    from './Components/Schedule/ScheduleAdd';


import UserSelect from './Components/User/UserSelect';
import UserDelete from './Components/User/UserDelete';
import SideBar    from './Components/SideMenu/SideBar';
import SignUp     from './Components/Sign/SignUp';
import SignIn     from './Components/Sign/SignIn';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";


class App extends Component{
    
  render(){
  

    return(
 
      <div>
        <BrowserRouter>
        <GNB></GNB>
        <SideBar></SideBar>
      
      
        <Route exact path="/"         component={ScheduleSelect} />
        <Route path="/SignIn"         component={SignIn} />
        <Route path="/SignUp"         component={SignUp} />
        <Route path="/UserSelect"     component={UserSelect} />
        <Route path="/ScheduleAdd"    component={ScheduleAdd}/>
        </BrowserRouter>
        
       </div>
    );
  }
}  
export default App;
