
import { Component } from "react";
import React, { useState } from 'react';
import './PracticeTwo.css';
import axios from "axios";
  
class PracticeTwo extends Component{
    
    state = {
        menuMessage: "menuOff",
        menuCheck: false,
        list : [],
        Mon : new Date().getMonth()+1,
        FullYear : new Date().getFullYear(),
        uid:sessionStorage.getItem("uid")
    };
    componentDidMount() {
    this._getData();
    }
    
    _getData = async () => {
    const userId = this.state.uid;
        const res = await axios.get('/get/ScheduleId',
        {
            params: {userId: userId
            }
        }
        )
        if(res.data[0] === undefined) {
            let cover = [];
            cover.push(res.data);
            return this.setState({ list : cover })
    }
    this.setState({ list : res.data });
    }

    render(){
        const mapCnt =[];
        for(let forCnt = 1 ; forCnt<= 6 ; forCnt++){
            mapCnt.push(forCnt);
        }
       
        const { list } = this.state;                
        const numbers = [1, 3, 5]; 
        const numbers2 = [2, 4, 6];
            const aloop = numbers.map((number, idx) => {
             return number});

            mapCnt.map((cnt,idx) => {
                return console.log(cnt)
            });    
     
        let nowDate  = new Date();//현재 날짜와 시간
        let nowYear  = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth()+1;
        let nowDay   = nowDate.getDate();
        const nowWeekArray =  ['일','월','화','수','목','금','토'] ;
        let nowWeekNum  = nowDate.getDay();


        let testin = nowYear+'-'+nowMonth+'-01';
        let test = new Date(testin).getDay();
        
        console.log(nowYear + '년 ' +nowMonth +'월 ' +nowDay +'일 ' + nowWeekArray[nowWeekNum] + '요일 '+nowWeekNum);
                
        return(
        <div className = "">   
        <div className="selectMon">
            <ul><li></li>
                <li className="leftAngleBracket"
                            onClick={()=>{  //동기 비동기 때문에?
                                if(this.state.Mon==1){
                                    this.setState({Mon:12});
                                    this.setState({FullYear : this.state.FullYear-1});
                                }else{
                                    this.setState({ Mon :this.state.Mon-1});
                                }
                            }}>&lt; 
                </li>
                <li className="YearMonth">{this.state.FullYear}  &nbsp; {this.state.Mon}  </li>
                <li className="rightAngleBracket"
                            onClick={()=>{
                                if(this.state.Mon>=12){
                                    this.setState({Mon:1});
                                    this.setState({FullYear : this.state.FullYear+1});
                                }else{
                                    this.setState({ Mon :this.state.Mon+1});
                                }
                            }}>&gt;
                </li>
            </ul>
        </div>
        <div>
            {mapCnt.map((cnt,idx) => {
                return (<div className="weekLine">
                            <div className="sunDay sunDay1" >
                                <ul>
                                    <li className="sunTitle">간달aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa프</li>
                                    <li>aa</li>
                                </ul>
                            </div>
                            <div className="monDay">
                                <ul>
                                    <li className=""></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="tuesDay">
                                <ul>
                                    <li className=""></li>
                                    <li>aaaaaa</li>
                                </ul>
                            </div>
                            <div className="wednesDay">
                                <ul>
                                    <li className=""></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="thursDay">
                                <ul>
                                    <li className=""></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="friDay">
                                <ul>
                                    <li className=""></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="saturDay">
                                <ul>
                                    <li className=""></li>
                                    <li></li>
                                </ul>
                            </div><div className="clear"></div>
                           </div>
                        )
                        })  
                              
            } 
            </div> 
            
            
        </div>
        );
    }    
}

export default PracticeTwo;