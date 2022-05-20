
import { Component } from "react";
import React, { useState } from 'react';
import './PracticeTwo.css';
import axios from "axios";
import { PresignedPost } from "aws-sdk/clients/s3";

  
class PracticeTwo extends Component{
    
    state = {
        menuMessage: "menuOff",
        menuCheck: false,
        list : [],
        Mon : new Date().getMonth()+1,
        FullYear : new Date().getFullYear(),
        searchDay : new Date().getDay,
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
        const mapCnt  = [0,1,2,3,4,5];
        const mapCnt2 = [0,1,2,3,4,5,6];
        const mapCnt3 = [0,1,2,3,4,5]
        let mapPlus  = 0;
        let mapPlus2 = 0;
        // for(let forCnt = 0 ; forCnt<= 5 ; forCnt++){
        //     mapCnt.push(forCnt);
        // }
        function mapfor(nowYear, nowMonth, nowDay, nowWeekNum){
            let arrayTable = [];
            for(let i=0; i<=5;i++){
                for(let j=0; j<=6;j++){
                    if(j==0){
                        arrayTable.push(<div className="sunDay sunTitle"></div>)
                    }else if(j==1){
                        arrayTable.push(<div className="monDay">bb</div>)
                    }else if(j==2){
                        arrayTable.push(<div className="tuesDay">cc</div>)
                    }else if(j==3){
                        arrayTable.push(<div className="wednesDay">dd</div>)
                    }else if(j==4){
                        arrayTable.push(<div className="thursDay">ee</div>)
                    }else if(j==5){
                        arrayTable.push(<div className="friDay">ff</div>)
                    }else if(j==6){
                        arrayTable.push(<div className="saturDay">gg</div>)
                    }
                    
                }
            }return arrayTable;
        }
        
        const { list } = this.state;                
        const numbers = [1, 3, 5]; 
        const numbers2 = [2, 4, 6];
            const aloop = numbers.map((number, idx) => {
             return number});

            
        
      
        

        let nowDate  = new Date();//현재 날짜와 시간
        let nowYear  = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth()+1;
        let nowDay   = nowDate.getDate();
        const nowWeekArray =  ['일','월','화','수','목','금','토'] ;
        let nowWeekNum  = nowDate.getDay();


        let testin = nowYear+'-'+nowMonth+'-01';
        let test = new Date(testin).getDay();
        
        console.log(nowYear + '년 ' +nowMonth +'월 ' +nowDay +'일 ' + nowWeekArray[nowWeekNum] + '요일 '+nowWeekNum);
        let arrSchedule = [];
        let scheduleList  =  list.map((i,idx) => {
                arrSchedule.push(i);
                console.log(i.account);
                
        })

        function callarr(){
            for( let i = 0; i<arrSchedule.length; i++ )
                if(arrSchedule[i].time==20220516)
                    console.log(arrSchedule[2].id);
            }
          
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
            {
            
            callarr()
            }
       
        {/* { mapCnt.map((cnt,idx) => {
            if(cnt)
                return (<div className="weekLine">
                            <div className="sunDay sunDay1">
                                <ul>
                                    <li className="sunTitle">간달aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa프</li>
                                    <li></li>
                                </ul>
                            </div>
                           
                           </div>
                        )
                        })  
                              
            }  */}
    
            {/* {mapCnt.map((cnt,idx) => { //42루프, 6루프7개  div안에 네임 적기
            // 맵을 2줄로 바꿔서 인자값 두개, 하나를 요일값 하나를 줄로 설정해서 classname 설정하기
                return (<div className="weekLine">
                            <div className="sunDay sunDay1">
                                <ul>
                                    <li className="sunTitle">간달aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa프</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div key={cnt} className="monDay">
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
                              
            }   */}
            </div>  
        </div>
        );
    }    
}

export default PracticeTwo;