
import { Component } from "react";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import './GNB.css';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



  

  
class GNB extends Component{
    state = {
        message: "menuBtn",
        
        memCheck: true
      };

      
      onClickVeiw = () => this.setState({message : "menuBtn", memCheck:false});
      onClickNot  = () => this.setState({message : "menuBtnTwo",  memCheck:true});

      
    render(){
      const {message, visible, memCheck} = this.state;
        return(
            <div className = "gnbContainer">   

            <button onClick={this.onClickVeiw} > 여기버튼</button>  
            <button onClick={this.onClickNot} > 여기버튼</button> 
            <h1>{message} </h1> 
            <h1>{this.state.memCheck ? 'line1' : 'line2Click'}</h1>  
                <div  className = {this.state.memCheck == 'menuBtn'? this.state.message='menuBtn' : this.state.message='menuBtnTwo'} > 
                <div className="ViewBtn"></div>
                <div className="NotViewBtn"></div>
                    <div className = {this.state.memCheck ? 'line1' : 'line1Click'}></div>
                    <div className = {this.state.memCheck ? 'line2' : 'line2Click'}></div>
                    <div className = {this.state.memCheck ? 'line3' : 'line3Click'}></div>
                </div><div className = {this.state.message == 'menuBtn'? 'open' : 'close'}></div>
                <div className = "logo" ><Link to ="/">Bob</Link></div>
                <div className = "gnbUser">
                    <ul>
                        <li><Link to ="ScheduleAdd">데이터추가용 메뉴화면</Link></li>
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