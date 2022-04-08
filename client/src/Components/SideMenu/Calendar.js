import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { Component } from 'react';

import DatePicker from "react-datepicker";

const [startDate, setStartDate] = useState(new Date());
class CalendarComponent extends Component {


  render(){    

    return  (
      <DatePicker selected={startDate} onChange = {date => setStartDate(date)}/>
    )
  } 
} 
export default CalendarComponent; 