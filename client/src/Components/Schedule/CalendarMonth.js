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

  ClickDiv = (abc, sss) => {
    console.log(abc + sss);

    let title = document.getElementById("Content" + abc + sss).innerText;
    let Content;

    this.setState({ DayTitle: title });
    this.OpenModal();
  };

  OpenModal = (j) => {
    this.setState({
      visible: true,
    });
    console.log(j);
  };
  CloseModal = () => {
    this.setState({
      visible: false,
    });
  };

  testa = (testCnt) => {
    console.log(testCnt);
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
          </div>
        );
      }
    }
    this.state.divArr.push(<div key={String(testCnt)} className="clear"></div>);
  };
  render() {
    for (var i = 0; i <= 5; i++) {
      this.testa(i);
    }
    let testword = "여기가 테스트다!";
    return (
      <div>
        <Link to="/testView/:holy">
          <div>Linkto</div>
        </Link>
        <Link to={`/testView?${this.state.testword}`}>
          <div>aaaaaa</div>
        </Link>

        <a href={` /testViewTwo/${testword}`}>여기눌러봐</a>
        {this.state.divArr}

        <Modal
          visible={this.state.visible}
          width="800"
          height="400"
          effect="fadeInDown"
          position="fixed"
          left="1000px"
          background-color="black"
          onClickAway={() => this.CloseModal()}
        >
          {/* <Link to="/ScheduleAdd/" state={{ data: "헤이헤이" }}>
            <Link to={`/ScheduleAdd/${this.state.DayTitle}`}> */}
          <div>
            {this.state.DayTitle}
            {this.state.DayContent} {this.state.DayLocation}
            {this.state.DayEtc}
            {this.state.DayDate}
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
