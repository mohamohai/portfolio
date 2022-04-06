
import { Component } from "react";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import '../mainCss/gnbContainer.css';
import React, { useState } from 'react';
import GnbClick from "./GnbClick";


  
class GNB extends Component{

    render(){
      
        return(
            <div className = "gnbContainer">
                <GnbClick></GnbClick>
                <div className = "menuBtn"> 
                    <div className = "line1"></div>
                    <div className = "line2"></div>
                    <div className = "line3"></div>
                </div><div className = "closeMenuBtn"></div>
                <div className = "logo" ><Link to ="/">Allegro</Link></div>
                <div className = "gnbUser">
                    <ul>
                        <li><Link to ="SignIn">로그인</Link></li>
                        <li>my</li>
                        <li>etc</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default GNB;