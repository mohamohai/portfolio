import React, { useState } from "react";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  var divArr = [];
  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 6; j++) {
      console.log(i, j);
      if (j === 0) {
        divArr.push(
          <div className={"CalForm Sun"}>
            <div className={"SunTitle Title" + String(i) + String(j)}></div>
            <div className={"SunContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 1) {
        divArr.push(
          <div className={"CalForm Mon"}>
            <div className={"MonTitle Title" + String(i) + String(j)}></div>
            <div className={"MonContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 2) {
        divArr.push(
          <div className={"CalForm Tue"}>
            <div className={"TueTitle Title" + String(i) + String(j)}></div>
            <div className={"TueContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 3) {
        divArr.push(
          <div className={"CalForm Wed"}>
            <div className={"WedTitle Title" + String(i) + String(j)}></div>
            <div className={"WedContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 4) {
        divArr.push(
          <div className={"CalForm Thu"}>
            <div className={"ThuTitle Title" + String(i) + String(j)}></div>
            <div className={"ThuContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 5) {
        divArr.push(
          <div className={"CalForm Fri"}>
            <div className={"FriTitle Title" + String(i) + String(j)}></div>
            <div className={"FriContent Content" + String(i) + String(j)}></div>
          </div>
        );
      } else if (j === 6) {
        divArr.push(
          <div className={"CalForm Sat"}>
            <div className={"SatTitle Title" + String(i) + String(j)}></div>
            <div className={"SatContent Content" + String(i) + String(j)}></div>
          </div>
        );
      }
    }

    divArr.push(<div className="clear"></div>);
  }
  return divArr;
}
export default Calendar;
