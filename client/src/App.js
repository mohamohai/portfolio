import { Component } from 'react';

import React, {useState}         from 'react';

import GNB            from './mainContents/GNB';
import GnbT           from './mainContents/GnbT';
import NotFound       from './mainContents/NotFound';
import ScheduleSelect from './Components/Schedule/ScheduleSelect';
import ScheduleAdd    from './Components/Schedule/ScheduleAdd';
import ScheduleDelete from './Components/Schedule/ScheduleDelete';
import ScheduleView from './Components/Schedule/ScheduleView';
import ScheduleCalendarMonth from './Components/Schedule/ScheduleCalendarMonth';

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

        <Switch>
            <Route exact path="/"         component={ScheduleCalendarMonth} />
            <Route path="/SignIn"         component={SignIn} />
            <Route path="/SignUp"         component={SignUp} />
            <Route path="/UserSelect"     component={UserSelect} />
            <Route path="/ScheduleAdd"    component={ScheduleAdd}/>
            <Route path="/ScheduleDelete" component={ScheduleDelete}/>
            <Route path="/ScheduleView"   component={ScheduleView}/>
            <Route path='*'               component={NotFound}/>
        </Switch>
        </BrowserRouter>
        
       </div>
    );
  }
}  
export default App;
