import React, { useState } from "react";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  function makeDiv() {
    var divArr = [];
    for (var i = 0; i < 3; i++) {
      divArr.push(<div className={"mon" + i}>안녕</div>);
      divArr.push(
        <div>
          <br></br>
        </div>
      );
    }
    return divArr;
  }
  return <div>{makeDiv()}</div>;
}
export default Calendar;
