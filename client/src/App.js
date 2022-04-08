import { Component } from 'react';

import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';
import GnbT from './mainContents/GnbT';
import SelectSchedule from './Components/Schedule/ScheduleSelect';
import ScheduleAdd from './Components/Schedule/ScheduleAdd';
import UserSelect from './Components/User/UserSelect';
import UserDelete from './Components/User/UserDelete';
import SideBar from './Components/SideMenu/SideBar';
import SignUp from './Components/Sign/SignUp';
import SignIn from './Components/Sign/SignIn';
import CalendarComponent from "./Components/SideMenu/Calendar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DatePicker from "react-datepicker";

class App extends Component{
    
   
    
  render(){
  
const [startDate, setStartDate] = useState(new Date());
    return(
 
      <div>
     

    <BrowserRouter>
    <GNB></GNB>
    <DatePicker selected={startDate} onChange = {date => setStartDate(date)}/>
        <Route exact path="/" component={UserSelect} />

        <Route path="/SignIn" component={SignIn} />
    </BrowserRouter>
      <GnbT></GnbT>
       </div>
 
      
    );
  }
}  
export default App;
