import { Component } from 'react';
import React, {useState} from 'react';
import axios from 'axios';
import './ScheduleAdd.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalPick from './Calendar'
class ScheduleAdd extends React.Component{

    constructor(props){
        super(props);

        let monCnt = new Date().getMonth()+1;
        let dayCnt   = new Date().getDate();
        if(monCnt<10){
          monCnt =  '0' + monCnt;
        } 
        if(dayCnt<10){
          dayCnt =  '0' + dayCnt;
        } 


        this.state = {
            account : '',
            title: '',
            content: '',
            location:'',
            time: '',
            etc:'',
            year:new Date().getFullYear()+'',
            month:monCnt,
            day:dayCnt
        }
    }
    
   
    ScheduleAdd(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        console.log(this.state.year);
      }
    
      _addData = async(e) => {
      
        const {account}     = this.state;
        const {title}       = this.state;
        const {content}     = this.state;
        const {location}    = this.state;     
        const {etc}         = this.state;
        const {year}        = this.state;
        const {month}       = this.state;
        const {day}         = this.state;
        const {time}        = this.state;

        
        const data = {
                      account:sessionStorage.getItem('uid'),
                      title:title,
                      content:content,   
                      location:location,
                      time:year+month+day,
                      etc:etc
                     
                      
        };
        e.preventDefault();
       
        const res = await axios('/add/Schedule', {
          method : 'POST',
          data :  data,
          headers: new Headers()
        })
        
       
          alert('데이터를 추가했습니다.');
          return window.location.reload();
      }

    render(){
      const dayCount = [];
        for(let cnt = 1; cnt<=31; cnt++)
          dayCount.push(cnt);
    
      const monthCount = [];
        for(let cnt = 1; cnt<=12; cnt++)
          monthCount.push(cnt);

      const yearCount = [];
      for(let cnt = 2022; cnt<=2030; cnt++)
      yearCount.push(cnt);
    
        return(
          <div> 
            <form method='POST' onSubmit={this._addData} className="ScheduleAddBox">            
              <input className="ScheduleAddTitle"     type='text'  name="title"    maxLength='20' placeholder="titlePlz"   onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddContent"   type='text'  name="content"  maxLength='20' placeholder="content"    onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddLocation"  type='text'  name="location" maxLength='20' placeholder="location"   onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddEtc"       type='text'  name="etc"      maxLength='20' placeholder="etc"        onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              
              
              <select name ='year' onChange={(e) => this.ScheduleAdd(e)}>
                {yearCount.map((cnt1, year) => {
                  if(cnt1 == 2022)  return(<option defaultValue value={cnt1} key={year}>{cnt1}</option>);
                    return(<option key={year} value={cnt1}>{cnt1}</option>);
                })}
              </select>
              <select name ='month'  onChange={(e) => this.ScheduleAdd(e)}>
                {monthCount.map((cnt2, month) => {
                  if(cnt2 <10) return(<option defaultValue value={cnt2} key={month}>0{cnt2}</option>);
                    return(<option key={month} value={cnt2}>{cnt2}</option>);
                })}
              </select>
              <select name = 'day'  onChange={(e) => this.ScheduleAdd(e)}>
                {dayCount.map((cnt3, day) => {
                  if(cnt3 < 10)  return(<option defaultValue value={cnt3} key={day}>0{cnt3}</option>);
                  return(<option key={day} value={cnt3}>{cnt3}</option>);
                })}
              </select>
              <input className="ScheduleAddBtn"       type='submit' value='Add' />
            </form>
          </div>
        );
      }
    } 
export default ScheduleAdd;