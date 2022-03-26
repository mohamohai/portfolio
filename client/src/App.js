import { Component } from 'react';
import './mainCss/gnbContainer.css';
import React, {useState}         from 'react';

import GNB           from './mainContents/GNB';

import Home from './inc/home.js';
import Test from './inc/test.js';


import { BrowserRouter, Link } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





class App extends Component{
    
   
    
  render(){
  
    return(
<>  
      <nav>
      <Link to ="/">Home</Link>
      <Link to ="/test">sss</Link>

      </nav>
<BrowserRouter>

      <Routes>
        <Route path ="*" element={<Home/>}/>
        <Route path ="/test" element={<Test/>}/>
      </Routes>
</BrowserRouter>
</>

       
 
      
    );
  }
}  
export default App;
