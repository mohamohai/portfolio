import React, { useState } from "react";
import { Component } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./ScheduleMain.css";
import "./Calendar.css";
import "./Calendar2.css";
import Calendar from "./Calendar.js";
import modal from "./ScheduleModal";

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
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
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
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";
        if (DayPoint >= DayCnt) {
          //여기가 문젠데
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
          this.state.list.map((line, dd) => {
            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + +String(i) + "" + String(j)
              );
              DayElement.innerText = line.title;
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
        if (DayPoint >= DayCnt) {
          DayElement = document.getElementById("Title" + String(i) + String(j));
          DayElement.innerText = DayWrite;
          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          this.state.list.map((line, dd) => {
            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + +String(i) + "" + String(j)
              );
              DayElement.innerText = line.title;
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
        );
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
          console.log();
          this.state.list.map((line, dd) => {
            if (line.time === CompareDay) {
              console.log(line);
              DayElement = document.getElementById(
                "Content" + +String(i) + "" + String(j)
              );
              DayElement.innerText = line.title;
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

        <Calendar></Calendar>
        <React.Fragment>
          <button onClick={this.openModal}> 모달팝업</button>
          <modal
            open={this.state.modalOpen}
            close={this.closeModal}
            title="Create a chat room"
          >
            // Modal.js <main> {this.props.children} </main>에 내용이 입력된다.
            리액트 클래스형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이
            만들어봐요!
          </modal>
        </React.Fragment>
      </div>
    );
  }
}
export default ScheduleMain;
