import { Component } from "react";
import React, { useState } from "react";
import axios from "axios";
import "./ScheduleCalendarMonth.css";
import Modal from "react-awesome-modal";

class ScheduleCalendarMonth extends Component {
  //달력 양식

  constructor(props) {
    super(props);
    if (sessionStorage.getItem("uid") == null) {
      this.state = {
        visible: false,
        menuMessage: "menuOff",
        menuCheck: false,
        list: [],
        Mon: new Date().getMonth() + 1,
        FullYear: new Date().getFullYear(),
        uid: "guest01",
      };
    } else {
      this.state = {
        visible: false,
        menuMessage: "menuOff",
        menuCheck: false,
        list: [],
        Mon: new Date().getMonth() + 1,
        FullYear: new Date().getFullYear(),
        uid: sessionStorage.getItem("uid"),
      };
    }
  }
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
  };

  render() {
    let ScheduleContent = "여기서부터 여기까지입니다.";
    const { list } = this.state;
    return (
      <div className="ScheduleCalendarMonth">
        <h5 onClick={() => this._openModal()}> 여기에 달력값 </h5>
        <Modal
          visible={this.state.visible}
          width="800"
          height="800"
          effect="fadeInDown"
          onClickAway={() => this._closeModal()}
        >
          <div>
            {ScheduleContent}
            <br></br>
            <input
              value="닫기"
              type="button"
              onClick={() => this._closeModal()}
            />
          </div>
        </Modal>
        <h5></h5>

        <table className="MonthView">
          <tr className="MonthShow">
            <td colSpan={7}>5월</td>
          </tr>
          <tr className="MonthDay">
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
            <td>일</td>
          </tr>
          <tr className="MonthRow">
            <td>1 </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className="MonthRow">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className="MonthRow">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className="MonthRow">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className="MonthRow">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ScheduleCalendarMonth;
