
import { Component } from "react";
import React, { useState } from 'react';
import './Practice.css';

  
class Practice extends Component{
    
    state = {
        menuMessage: "menuOff",
        menuCheck: false,
        list : [],
        Mon : new Date().getMonth()+1,
        FullYear : new Date().getFullYear()

      };

    render(){
                        
        const numbers = [1, 3, 5]; 
        const numbers2 = [2,4,6];
            const aloop = numbers.map((number, idx) => {
                const aloop2 = numbers2.map ((number2,idx) =>{
                    console.log(number2); 
                })
                console.log(number); 
            return number});
        console.log(aloop);

       
        let nowDate  = new Date();//현재 날짜와 시간
        let nowYear  = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth()+1;
        let nowDay   = nowDate.getDate();
        const nowWeekArray =  ['일','월','화','수','목','금','토'] ;
        let nowWeekNum  = nowDate.getDay();


        let testin = nowYear+'-'+nowMonth+'-01';
        let test = new Date(testin).getDay();
        
        console.log(nowYear + '년 ' +nowMonth +'월 ' +nowDay +'일 ' + nowWeekArray[nowWeekNum] + '요일 ');
 
   

        return(
        <div className = "">   
        <div className="selectMon">
            <ul>
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
       
        

            <table>
                <tbody>
                    <tr>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                        <td>일</td>
                    </tr> 
                </tbody>
            </table>
            <div className="CalRow">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="CalRow">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="CalRow">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

        
        </div>
        );
    }    
}

export default Practice;