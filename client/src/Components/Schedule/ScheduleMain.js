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
                id="overover"
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
    this.writeDay();
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
  writeDay = () => {
    console.log("여기에 데이터 기입");
  };
  MinusMonth = () => {
    //동기 비동기 때문에?
    if (this.state.Mon === 1) {
      this.setState({ Mon: 12 });
      this.setState({ FullYear: this.state.FullYear - 1 });

      this.setState({});
    } else {
      this.setState({ Mon: this.state.Mon - 1 });
      this.setState({ CalNum: this.state.CalNum + 1 });
    }
  };
  PlusMonth = () => {
    if (this.state.Mon >= 12) {
      this.setState({ Mon: 1 });
      this.setState({ FullYear: this.state.FullYear + 1 });
    } else {
      this.setState({ Mon: this.state.Mon + 1 });
      console.log(new Date(this.state.FullYear, this.state.Mon));
      const wowmagic = document.getElementsByClassName("Title00");
      wowmagic.innerHtml = "ss";
      const wowmagic2 = document.getElementsByClassName("Title01");
      const element = document.getElementById("overover");
      element.innerText += "<div>InnerText<div>";
      console.log(wowmagic);
      console.log(wowmagic2);
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
              {this.state.CalNum}
            </li>
            <li className="leftAngleBracket" onClick={this.PlusMonth}>
              &gt;
            </li>
          </ul>
          <div id="my_div" className="my_div">
            aaaaaaaaaa
          </div>
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
