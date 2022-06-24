import React from "react";
import { Component } from "react";
import "./Calendar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "react-awesome-modal";

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

class CalendarMonth extends Component {
  state = {
    visible: false,
    DayTitle: "",
    DayContent: "",
    DayLocation: "",
    DayEtc: "",
    DayDate: "",
    divArr: [],
    testword: "1aa51ㅁㅁ5",
  };

  ClickDiv = (Stringi, Stringj) => {
    let title = document.getElementById(
      "Content" + Stringi + Stringj
    ).innerText;
    let content = document.getElementById(
      "ConNone" + Stringi + Stringj
    ).innerText;
    let etc = document.getElementById("EtcNone" + Stringi + Stringj).innerText;
    let date = document.getElementById(
      "TimeNone" + Stringi + Stringj
    ).innerText;
    let location = document.getElementById(
      "LocNone" + Stringi + Stringj
    ).innerText;

    this.setState({
      DayTitle: title,
      DayContent: content,
      DayLocation: location,
      DayEtc: etc,
      DayDate: date,
    });
    this.OpenModal();
  };

  OpenModal = (j) => {
    this.setState({
      visible: true,
    });
  };
  CloseModal = () => {
    this.setState({
      visible: false,
    });
  };

  PushDiv = (testCnt) => {
    for (var j = 0; j <= 6; j++) {
      if (j === 0) {
        this.state.divArr.push(
          // 데이터 주고 받기 / 달력 양식 년도해서 데이터 있으면 그 부분만 색칠/ modal 화면 구성 or viewer페이지 구성

          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Sun"}
            onClick={() => this.ClickDiv(String(testCnt), "0")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              value={String(testCnt) + String(j)}
              className={
                "SunTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "SunContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 1) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Mon"}
            onClick={() => this.ClickDiv(String(testCnt), "1")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "MonTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "MonContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 2) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Tue"}
            onClick={() => this.ClickDiv(String(testCnt), "2")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "TueTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "TueContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 3) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Wed"}
            onClick={() => this.ClickDiv(String(testCnt), "3")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "WedTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "WedContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 4) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Thu"}
            onClick={() => this.ClickDiv(String(testCnt), "4")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "ThuTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "ThuContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 5) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Fri"}
            onClick={() => this.ClickDiv(String(testCnt), "5")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "FriTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "FriContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      } else if (j === 6) {
        this.state.divArr.push(
          <div
            key={String(testCnt) + String(j)}
            className={"CalForm Sat"}
            onClick={() => this.this.ClickDiv(String(testCnt), "6")}
          >
            <div
              id={"Title" + String(testCnt) + String(j)}
              className={
                "SatTitle CalTitle Title" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"Content" + String(testCnt) + String(j)}
              className={
                "SatContent CalContent Content" + String(testCnt) + String(j)
              }
            ></div>
            <div
              id={"AccNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"ConNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"LocNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"TimeNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
            <div
              id={"EtcNone" + String(testCnt) + String(j)}
              className="DisplayNone"
            ></div>
          </div>
        );
      }
    }
    this.state.divArr.push(<div key={String(testCnt)} className="clear"></div>);
  };
  render() {
    for (var i = 0; i <= 5; i++) {
      this.PushDiv(i);
    }

    return (
      <div>
        {this.state.divArr}

        <Modal
          visible={this.state.visible}
          width="600"
          height="300"
          effect="fadeInDown"
          onClickAway={() => this.CloseModal()}
        >
          <div id="ModalView">
            <div>
              <a
                href={` /ScheduleDeleteSelect/${this.state.DayDate}/${this.state.DayTitle}`}
                style={{ float: "right", margin: "0 50px 0 0" }}
              >
                ★★삭제★★
              </a>
              <a
                href={`/ScheduleAddSelect/${this.state.DayDate}`}
                style={{ float: "right", margin: "0 50px 0 0" }}
              >
                ♠♠등록♠♠
              </a>
            </div>
            <div className="clear"></div>
            <br></br>
            제목 : {this.state.DayTitle}
            <br></br>
            {this.state.DayContent}
            <br></br>
            {this.state.DayLocation}
            <br></br>
            {this.state.DayEtc}
            <br></br>
            {this.state.DayDate}
            <br></br>
            <br></br>
            <input
              value="닫기"
              type="button"
              onClick={() => this.CloseModal()}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default CalendarMonth;
