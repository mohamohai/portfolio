import { Component } from 'react';

import React, {useState}         from 'react';

import GNB            from './mainContents/GNB';
import GnbT           from './mainContents/GnbT';
import NotFound       from './mainContents/NotFound';
import ScheduleSelect from './Components/Schedule/ScheduleSelect';
import ScheduleAdd    from './Components/Schedule/ScheduleAdd';
import ScheduleDelete from './Components/Schedule/ScheduleDelete';


import UserSelect from './Components/User/UserSelect';
import UserDelete from './Components/User/UserDelete';
import SideBar    from './Components/SideMenu/SideBar';
import SignUp     from './Components/Sign/SignUp';
import SignIn     from './Components/Sign/SignIn';


import { BrowserRouter,Route, Link,Switch } from "react-router-dom";


class App extends Component{
    
  render(){
    var sessionData = "mineItRecord"; 
    sessionStorage.setItem("mineSession", sessionData ); // 저장


    return(
 
      <div>
        <BrowserRouter>
        <GNB></GNB>
        <SideBar></SideBar>
      
      
        <Route exact path={"/"   }      component={ScheduleSelect} />
        <Route exact path="/SignIn"         component={SignIn} />
        <Route exact path="/SignUp"         component={SignUp} />
        <Route exact path="/UserSelect"     component={UserSelect} />
        <Route exact path="/ScheduleAdd"    component={ScheduleAdd}/>
        <Route exact path="/ScheduleDelete" component={ScheduleDelete}/>
        <Route exact path='*'             component={NotFound}/>
        </BrowserRouter>
        
       </div>
    );
  }
}  
export default App;
