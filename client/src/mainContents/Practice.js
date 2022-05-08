
import { Component } from "react";
import React, { useState } from 'react';


  
class Practice extends Component{
    
    state = {
        menuMessage: "menuOff",
        menuCheck: false
        
      };

    render(){
                        
        const numbers = [1, 3, 5]; 
            const aloop = numbers.map((number, idx) => {
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
             
        function MonthPlus(){
          
            nowMonth = nowMonth+1;
            if(nowMonth > 12){
                nowMonth = 1;
                nowYear = nowYear + 1
            }
            console.log(nowYear+'년 '+nowMonth);
        }
        function MonthMinus(){
            nowMonth = nowMonth - 1;
            if(nowMonth < 1){
                nowMonth = 12;
                nowYear = nowYear - 1
            }
            console.log(nowYear+'년 '+nowMonth);
        }
      

        console.log(nowYear + '년 ' +nowMonth +'월 ' +nowDay +'일 ' + nowWeekArray[nowWeekNum] + '요일 ');
        console.log(test)

        return(
        <div className = "">   
        
        <button onClick={MonthMinus}> ◁ </button>
        <h1>a </h1>
        <button onClick={MonthPlus}> ▷ </button>
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
                     {/* 여기서부터 데이터 불러와서 입히기 작업  */}
                    <tr>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                    <tr>
                    <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                    <tr>
                    <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                    <tr>
                    <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                    <tr>
                    <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                </tbody>
            </table>

        
        </div>
        );
    }    
}

export default Practice;