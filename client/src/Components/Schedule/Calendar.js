import React, { useState } from "react";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Calen() {
  var divArr = [];
  let usernames = "dddaaaa";
  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 6; j++) {
      if (j === 0) {
        divArr.push(
          // 데이터 주고 받기 / 달력 양식 년도해서 데이터 있으면 그 부분만 색칠/ modal 화면 구성 or viewer페이지 구성
          <Link to={""}>
            <div key={String(i) + String(j)} className={"CalForm Sun"}>
              <div
                id={"Title" + String(i) + String(j)}
                className={"SunTitle CalTitle Title" + String(i) + String(j)}
              >
                {"aa "}
              </div>
              <div
                id={"Content" + String(i) + String(j)}
                className={
                  "SunContent CalContent Content" + String(i) + String(j)
                }
              ></div>
            </div>
          </Link>
        );
      } else if (j === 1) {
        divArr.push(
          <div key={String(i) + String(j)} className={"CalForm Mon"}>
            <div
              id={"Title" + String(i) + String(j)}
              className={"MonTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
              id={"Title" + String(i) + String(j)}
              className={"TueTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
              id={"Title" + String(i) + String(j)}
              className={"WedTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
              id={"Title" + String(i) + String(j)}
              className={"ThuTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
              id={"Title" + String(i) + String(j)}
              className={"FriTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
              id={"Title" + String(i) + String(j)}
              className={"SatTitle CalTitle Title" + String(i) + String(j)}
            ></div>
            <div
              id={"Content" + String(i) + String(j)}
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
export default Calen;
