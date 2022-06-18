import React, { useState } from "react";
import { Component } from "react";
import "./Calendar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "react-awesome-modal";
import { addSeconds } from "date-fns";
import $ from "jquery";
import id from "date-fns/locale/id/index.js";
import PlusCnt from "./PlusCnt.js";
class CalendarMonth extends Component {
  state = {
    visible: false,
    DivCountNum: 0,
    DivCountNum2: 0,
  };
  StatePlusFun1 = () => {
    this.setState({ DivCountNum: this.state.DivCountNum + 1 });
  };
  StatePlusFun2 = () => {
    this.setState({ DivCountNum2: this.state.DivCountNum2 + 1 });
  };
  PlusCnt1 = (abc) => {
    console.log(abc);
  };
  ClickDiv = (inCount) => {
    console.log(this.state.DivCountNum);
    console.log(this.state.DivCountNum2);
  };
  ClickDivv = () => {
    console.log(this.state.DivCountNum);
    this.OpenModal();
  };
  testOne = () => {
    console.log(this.state.DivCountNum);
  };
  OpenModal = function () {
    this.setState({
      visible: true,
    });
  };
  CloseModal = function () {
    this.setState({
      visible: false,
    });
  };
  render() {
    let divArr = [];
    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        if (j === 0) {
          divArr.push(
            // 데이터 주고 받기 / 달력 양식 년도해서 데이터 있으면 그 부분만 색칠/ modal 화면 구성 or viewer페이지 구성
            <div key={String(i) + String(j)} className={"CalForm Sun"}>
              <div
                id={"Title" + String(i) + String(j)}
                value={String(i) + String(j)} //test
                className={"SunTitle CalTitle Title" + String(i) + String(j)}
                onClick={() => this.PlusCnt1(this.state.DivCountNum)}
              ></div>

              <div
                id={"Content" + String(i) + String(j)}
                className={
                  "SunContent CalContent Content" + String(i) + String(j)
                }
              ></div>
            </div>
          );
          {
            <PlusCnt></PlusCnt>;
          }
        } else if (j === 1) {
          divArr.push(
            <div
              onClick={() => this.OpenModal()}
              key={String(i) + String(j)}
              className={"CalForm Mon"}
            >
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
    return (
      <div>
        {divArr}

        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInDown"
          onClickAway={() => this.CloseModal()}
        >
          <div>
            <ul>
              <li>{this.state.ClickTitle}</li>
              <li>{this.state.ClickContent}</li>
              <li>{this.props.title}</li>
            </ul>

            <input
              value="닫기"
              type="button"
              onClick={() => this.CloseModal()}
            />
          </div>
        </Modal>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              DivCountNum: e.target.value,
            });
          }}
        ></input>
        <input
          type="button"
          onClick={() => this.testOne()}
          value="aaaaaaaa"
        ></input>
      </div>
    );
  }
}

export default CalendarMonth;
