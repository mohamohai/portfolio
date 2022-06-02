import React, { useState } from "react";
import { Component } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./ScheduleMain.css";
import MakeDiv from "./Calendar";
import "./Calendar.css";
import "./Calendar2.css";
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
  Calendar() {
    var divArr = [];
    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        if (j === 0) {
          divArr.push(
            <div key={String(i) + String(j)} className={"CalForm Sun"}>
              <div
                id={"Title" + String(i) + String(j)}
                className={"SunTitle CalTitle Title" + String(i) + String(j)}
              >
                {"aa "}
              </div>
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
                id={"Title" + String(i) + String(j)}
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
                id={"Title" + String(i) + String(j)}
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
                id={"Title" + String(i) + String(j)}
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
                id={"Title" + String(i) + String(j)}
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
                id={"Title" + String(i) + String(j)}
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
                id={"Title" + String(i) + String(j)}
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
    console.log(this.state.FullYear + "년" + this.state.Mon + "월");
    console.log(this.state.daySearch[DayCnt] + "요일 ");
    let DayPoint = 0;
    let DayWrite = 1;

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
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
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
            <li className="rightAngleBracket" onClick={this.MinusMonth}>
              &lt;
            </li>
            <li className="YearMonth">
              {this.state.FullYear} &nbsp; {this.state.Mon}
            </li>
            <li className="leftAngleBracket" onClick={this.PlusMonth}>
              &gt;
            </li>
          </ul>
        </div>
        {/* {list.map((rowCnt, keyCnt) => {
          console.log(rowCnt.time);
          if (rowCnt.time == 20220516)
            return (
              <div key={keyCnt} className="ScheduleData">
                <div> {rowCnt.account} </div>
                <br></br>
                <div> {rowCnt.title} </div>
                <br></br>
                <div> {rowCnt.content} </div>
                <br></br>
                <div> {rowCnt.location}</div>
                <br></br>
                <div> {rowCnt.time} </div>
                <br></br>
                <div> {rowCnt.etc} </div>
                <br></br>
              </div>
            );
        })} */}
        <div></div>
        <div>{this.Calendar()}</div>
      </div>
    );
  }
}
export default ScheduleMain;
