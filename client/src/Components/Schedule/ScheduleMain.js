import React, { useState } from "react";
import { Component } from "react";
import axios from "axios";
import "./css/ScheduleMain.css";
import "./css/Calendar.css";
import "./css/Calendar2.css";
import $ from "jquery";

import Calendar from "./CalendarMonth.js";

import Modal from "react-awesome-modal";

class ScheduleMain extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuMessage: "menuOff",
    menuCheck: false,
    list: [],
    ScheduleList: [],
    FullYear: new Date().getFullYear(),
    Mon: new Date().getMonth() + 1,
    uid: sessionStorage.getItem("uid"),
    daySearch: ["일", "월", "화", "수", "목", "금", "토"],
  };

  _openModal = function () {
    this.setState({
      visible: true,
    });
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const userId = this.state.uid;
    const res = await axios.get("/get/ScheduleId", {
      params: { userId: userId },
    });
    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
      return this.setState({ list: cover });
    }
    this.setState({ list: res.data });
    this.setState({ SelectList: this.state.list });
    this.onWrite();
  };

  MinusMonth = () => {
    if (this.state.Mon === 1) {
      this.MinusWrite();
      this.setState({ Mon: 12 });
      this.setState({ FullYear: this.state.FullYear - 1 });
    } else {
      this.MinusWrite();
      this.setState({ Mon: this.state.Mon - 1 });
    }
  };
  MinusWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon - 2).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용

    let lowMon = this.state.Mon - 1; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay;
    let ContentElement; // Content 기입용

    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }

    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        //초기화
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        DayElement = document.getElementById(
          //title 기입
          "Content" + +String(i) + "" + String(j)
        );
        DayElement.style.backgroundColor = "";
        ContentElement.innerText = "";

        if (DayPoint >= DayCnt) {
          // 1일부터 날짜기입
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;
          CompareDay = DayWrite;
          console.log(CompareDay);
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;

          this.state.list.map((line, dd) => {
            //날짜값 비교해서 데이터 입력, 여기서 나머지도 다
            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.title;
              DayElement.style.backgroundColor = "rgb(242, 168, 255)";
              console.log("");
              DayElement.style.borderRadius = "5px";

              DayElement = document.getElementById(
                "ConNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.content;
              DayElement = document.getElementById(
                "LocNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.location;

              DayElement = document.getElementById(
                "EtcNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.etc;
            }
          });
          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon - 1, 0).getDate()
          ) {
            const element = document.getElementById(
              "Title" + String(i) + String(j)
            );
            element.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
  };
  PlusMonth = () => {
    if (this.state.Mon === 12) {
      this.setState({ Mon: 1 });
      this.setState({ FullYear: this.state.FullYear + 1 });
      this.PlusWrite();
    } else {
      this.setState({ Mon: this.state.Mon + 1 });
      this.PlusWrite();
    }
  };
  PlusWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용

    let lowMon = this.state.Mon + 1; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay; // map 함수 if용
    let ContentElement; // Content 기입용

    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }

    for (var i = 0; i <= 5; i++) {
      // Month에 day 기입
      for (var j = 0; j <= 6; j++) {
        DayElement = document.getElementById("Title" + String(i) + String(j));
        DayElement.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";

        DayElement = document.getElementById(
          //title 기입
          "Content" + +String(i) + "" + String(j)
        );
        DayElement.style.backgroundColor = "";

        if (DayPoint >= DayCnt) {
          DayElement = document.getElementById("Title" + String(i) + String(j));
          DayElement.innerText = DayWrite;
          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;
          this.state.list.map((line, dd) => {
            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.title;
              DayElement.style.backgroundColor = "rgb(242, 168, 255)";
              DayElement.style.borderRadius = "5px";

              DayElement = document.getElementById(
                "ConNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.content;
              DayElement = document.getElementById(
                "LocNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.location;
              DayElement = document.getElementById(
                "EtcNone" + String(i) + "" + String(j)
              );
              DayElement.innerText = line.etc;
            }
          });

          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon + 1, 0).getDate()
          ) {
            DayElement = document.getElementById(
              "Title" + String(i) + String(j)
            );
            DayElement.innerText = "";
            ContentElement = document.getElementById(
              "Content" + String(i) + String(j)
            );
            ContentElement.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
  };
  onWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon - 1).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용

    let lowMon = this.state.Mon; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay;
    let ContentElement; // Content 기입용
    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }
    let FullDay = this.state.FullYear + lowMon + lowDay;

    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        ); //위에 ele까지 칸 비우기
        ContentElement.innerText = "";
        if (DayPoint >= DayCnt) {
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;

          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;
          this.state.list.map((line, dd) => {
            //날짜값 비교해서 데이터 입력, 여기서 나머지도 다
            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );

              if (DayElement.innerText.length == 0) {
                DayElement.innerText = line.title; //디비 제목을 넣는건데 이미 데이터가 있으니까 이걸 만져야됨
                DayElement.style.backgroundColor = "rgb(242, 168, 255)";

                DayElement.style.borderRadius = "5px";
                //
                DayElement = document.getElementById(
                  "ConNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.content;
                DayElement = document.getElementById(
                  "LocNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.location;

                DayElement = document.getElementById(
                  "EtcNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.etc;
              } else {
                $("<div>" + line.title + "</div>").insertAfter(
                  ".Content" + String(i) + "" + String(j)
                );
              }
            }
          });
          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon, 0).getDate()
          ) {
            const element = document.getElementById(
              "Title" + String(i) + String(j)
            );
            element.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }

    /* 테스트*/
  };

  render() {
    const { list } = this.state;
    const SelectList = [];
    const SelectData = [];

    list.map((rowCnt, keyCnt) => {
      SelectData.push(rowCnt);
      SelectList.push(rowCnt);
    });

    return (
      <div className="Select">
        <div className="selectMon">
          <ul>
            <li className="YearMonth">
              {this.state.FullYear} &nbsp; {this.state.Mon}
            </li>
            <li className="leftAngleBracket" onClick={this.MinusMonth}>
              &lt;&nbsp;
            </li>
            <li className="rightAngleBracket" onClick={this.PlusMonth}>
              &gt;
            </li>
          </ul>
        </div>
        <div className="MainCalMonth">
          <Calendar></Calendar>
        </div>
      </div>
    );
  }
}
export default ScheduleMain;
