import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import "./ScheduleCalendarMonth.css";


class ScheduleCalendarMonth extends Component { //달력 양식
  
  render() {
    return(
      <div className='ScheduleCalendarMonth'>
         <table className="MonthView">
         <tr className='MonthShow'>
            <td colSpan={7}>4월</td>
          </tr>
          <tr className='MonthDay'>
            <td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td><td>일</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>

         </table>
             
      </div>
    )
  }
}

export default ScheduleCalendarMonth;