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
      console.log(this.state.list);
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
    console.log(this.state.FullYear + "년" + this.state.Mon + "월");
    console.log(this.state.daySearch[DayCnt] + "요일 ");
    let DayPoint = 0;
    let DayWrite = 1;

    let lowMon = this.state.Mon + 1;
    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    let lowDay = 1;
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }
    let a = this.state.list[0].time;
    let b = a.substr(6, 7); //날짜값 뜯어내기

    console.log(b);
    let FullDay = this.state.FullYear + lowMon + lowDay;
    console.log(FullDay);
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
            new Date(this.state.FullYear, this.state.Mon + 1, 0).getDate()
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
