import { Component } from 'react';

import React, {useState}         from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalendarComponent from "./Calendar";

class SideBar extends Component{
    
   
    
  render(){
  
    return(
 
      <div>
        <CalendarComponent></CalendarComponent>

       </div>
 
      
    );
  }
}  
export default SideBar;
