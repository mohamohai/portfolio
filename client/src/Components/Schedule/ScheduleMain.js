import React, { useState } from "react";
import { Component } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./ScheduleMain.css";
import MakeDiv from "./Calendar";
import "./Calendar.css";
import "./Calendar2.css";
import Calendar from "./Calendar.js";

class ScheduleMain extends Component {
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

  componentDidMount() {
    this._getData();
    this.onWrite();
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
  };

  MinusMonth = () => {
    //동기 비동기 때문에?
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
    console.log(this.state.FullYear + "년" + this.state.Mon + "월");
    console.log(this.state.daySearch[DayCnt] + "요일 ");
    let DayPoint = 0;
    let DayWrite = 1;
    let lowMon = this.state.Mon - 1;
    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    let lowDay = 1;
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }

    let FullDay = this.state.FullYear + lowMon + lowDay;
    console.log(FullDay);
    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        if (DayPoint >= DayCnt) {
          //여기가 문젠데
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;
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

    let ContentElement; // Content 기입용
    let ContentCnt = 0; //

    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    let a = this.state.list[0].time;
    let b = a.substr(6, 7); //날짜값 뜯어내기

    let FullDay = this.state.FullYear + lowMon + lowDay;

    for (var i = 0; i <= 5; i++) {
      // Month에 day 기입
      for (var j = 0; j <= 6; j++) {
        DayElement = document.getElementById("Title" + String(i) + String(j));
        DayElement.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";
        if (DayPoint >= DayCnt) {
          DayElement = document.getElementById("Title" + String(i) + String(j));
          DayElement.innerText = DayWrite;

          this.state.list.map((test, dd) => {
            // 20220606 1228    맵에 넣었는데 값이 안맞음 substr이나 dayWrite , for ij 확인
            for (var i = 1; i <= 31; i++) {
              lowDay = i;
              if (lowDay < 10) {
                lowDay = "0" + lowDay;
              } else {
                lowDay = lowDay + "";
              }
              FullDay = this.state.FullYear + lowMon + lowDay; //db 날짜값
              let a = FullDay;
              let b = a.substr(6, 7); //날짜값 뜯어내기

              if (b == DayWrite) {
                DayElement = document.getElementById(
                  "Content" + +String(i) + String(j)
                ); //여기 고쳐 나야
                console.log(b);
              }
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
    // this.state.list.map((test, dd) => {
    //   for (var i = 1; i <= 31; i++) {
    //     lowDay = i;
    //     if (lowDay < 10) {
    //       lowDay = "0" + lowDay;
    //     } else {
    //       lowDay = lowDay + "";
    //     }
    //     FullDay = this.state.FullYear + lowMon + lowDay;

    //     if (FullDay == test.time) {
    //       DayElement = document.getElementById("Content03"); //여기 고쳐 나야
    //       DayElement.innerText = test.title;
    //       console.log(lowMon + "월" + lowDay + "일" + test.title);
    //     }
    //   }
    // });
  };
  onWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon - 1).getDay();
    let DayPoint = 0;
    let DayWrite = 1;
    let lowMon = this.state.Mon;
    let lowDay = 1;
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
        if (DayPoint >= DayCnt) {
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;

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
    const { SelectList } = this.state;
    const SelectData = [];

    list.map((rowCnt, keyCnt) => {
      SelectData.push(rowCnt);
      // SelectList.push(rowCnt);
    });

    return (
      <div>
        <div className="selectMon">
          <ul>
            <li className="leftAngleBracket" onClick={this.MinusMonth}>
              &lt;&nbsp;
            </li>
            <li className="YearMonth">
              {this.state.FullYear} &nbsp; {this.state.Mon}
            </li>
            <li className="rightAngleBracket" onClick={this.PlusMonth}>
              &gt;
            </li>
          </ul>
        </div>

        {/* <div>
          {list.map((info, key) => {
            return (
              <div key={key} className="ScheduleData">
                <div> {info.account} </div>
                <br></br>
                <div> {info.title} </div>
                <br></br>
                <div> {info.content} </div>
                <br></br>
                <div> {info.location}</div>
                <br></br>
                <div> {info.time} </div>
                <br></br>
                <div> {info.etc} </div>
                <br></br>
              </div>
            );
          })}
        </div> */}

        <Calendar></Calendar>
      </div>
    );
  }
}
export default ScheduleMain;
