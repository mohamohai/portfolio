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
    Mon: new Date().getMonth() + 1,
    FullYear: new Date().getFullYear(),
    searchDay: new Date().getDay(),
    uid: sessionStorage.getItem("uid"),
    CalNum: 8,
    CalNum2: 0,
  };
  Calendar() {
    var divArr = [];
    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        if (j === 0) {
          divArr.push(
            <div key={String(i) + String(j)} className={"CalForm Sun"}>
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
  };

  PlusMonth = () => {
    //동기 비동기 때문에?
    if (this.state.Mon === 1) {
      this.setState({ Mon: 12 });
      this.setState({ FullYear: this.state.FullYear - 1 });
      this.setState({ CalNum: this.state.CalNum + 1 });
    } else {
      this.setState({ Mon: this.state.Mon - 1 });
    }
  };
  MinusMonth = () => {
    if (this.state.Mon >= 12) {
      this.setState({ Mon: 1 });
      this.setState({ FullYear: this.state.FullYear + 1 });
    } else {
      this.setState({ Mon: this.state.Mon + 1 });
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
            <li></li>
            <li className="leftAngleBracket" onClick={this.PlusMonth}>
              &lt;
            </li>
            <li className="YearMonth">
              {this.state.FullYear} &nbsp; {this.state.Mon}{" "}
            </li>
            <li className="rightAngleBracket" onClick={this.MinusMonth}>
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

        <div>{this.Calendar()}</div>
      </div>
    );
  }
}
export default ScheduleMain;
