import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';
import SelectUser from './Components/SelectUser';
import GNB           from './mainContents/GNB';

import Home from './inc/home.js';
import Test from './inc/test.js';
import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





class App extends Component{
    
   
    
  render(){
  
    return(
 
      <dvi>
        <GNB></GNB>
        <SelectUser></SelectUser>

      </dvi>



       
 
      
    );
  }
}  
export default App;
