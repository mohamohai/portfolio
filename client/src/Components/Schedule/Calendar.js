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
          <div
            id="masaka"
            key={String(i) + String(j)}
            className={"CalForm Sun"}
          >
            <div
              className={"SunTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "SunContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 1) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Mon"}>
            <div
              className={"MonTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "MonContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 2) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Tue"}>
            <div
              className={"TueTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "TueContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 3) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Wed"}>
            <div
              className={"WedTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "WedContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 4) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Thu"}>
            <div
              className={"ThuTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "ThuContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 5) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Fri"}>
            <div
              className={"FriTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "FriContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      } else if (j === 6) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Sat"}>
            <div
              className={"SatTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              className={
                "SatContent CalContent Content" + String(i) + String(j)
              }
            ></div>
          </div>
        );
      }
    }

    divArr.push(<div key={String(i)} className="clear"></div>);
  }
  return divArr;
}
export default Calendar;
