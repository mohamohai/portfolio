import { Component } from "react";
import React, { useState } from "react";
import axios from "axios";
import "./ScheduleAdd.css";
import { useLocation } from "react-router-dom";

class ScheduleAdd extends React.Component {
  constructor(props) {
    super(props);
    let monCnt = new Date().getMonth() + 1;
    let dayCnt = new Date().getDate();

    this.state = {
      account: "",
      title: "",
      content: "",
      location: "",
      time: "",
      etc: "",
      year: new Date().getFullYear() + "",
      month: monCnt,
      day: dayCnt,
    };
  }
  Home = () => {};
  ScheduleAdd(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    console.log(e.target.nextState);
  }

  _addData = async (e) => {
    const { account } = this.state;
    const { title } = this.state;
    const { content } = this.state;
    const { location } = this.state;
    const { etc } = this.state;
    const { year } = this.state;
    let { month } = this.state;
    let { day } = this.state;
    const { time } = this.state;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    const data = {
      account: sessionStorage.getItem("uid"),
      title: title,
      content: content,
      location: location,
      time: year + month + day,
      etc: etc,
    };
    e.preventDefault();

    const res = await axios("/add/Schedule", {
      method: "POST",
      data: data,
      headers: new Headers(),
    });

    alert("데이터를 추가했습니다.");
    return window.location.reload();
  };

  render() {
    const dayCount = [];
    for (let cnt = 1; cnt <= 31; cnt++) dayCount.push(cnt);

    const monthCount = [];
    for (let cnt = 1; cnt <= 12; cnt++) monthCount.push(cnt);

    const yearCount = [];
    for (let cnt = 2022; cnt <= 2030; cnt++) yearCount.push(cnt);

    return (
      <div>
        <form method="POST" onSubmit={this._addData} className="ScheduleAddBox">
          <input
            className="ScheduleAddTitle"
            type="text"
            name="title"
            maxLength="20"
            placeholder="titlePlz"
            onChange={(e) => this.ScheduleAdd(e)}
          />

          <br></br>
          <input
            className="ScheduleAddContent"
            type="text"
            name="content"
            maxLength="20"
            placeholder="content"
            onChange={(e) => this.ScheduleAdd(e)}
          />
          <br></br>
          <input
            className="ScheduleAddLocation"
            type="text"
            name="location"
            maxLength="20"
            placeholder="location"
            onChange={(e) => this.ScheduleAdd(e)}
          />
          <br></br>
          <input
            className="ScheduleAddEtc"
            type="text"
            name="etc"
            maxLength="20"
            placeholder="etc"
            onChange={(e) => this.ScheduleAdd(e)}
          />
          <br></br>
          <select name="year" onChange={(e) => this.ScheduleAdd(e)}>
            {yearCount.map((cnt1, year) => {
              if (cnt1 == 2022)
                return (
                  <option defaultValue value={cnt1} key={year}>
                    {cnt1}
                  </option>
                );
              return (
                <option key={year} value={cnt1}>
                  {cnt1}
                </option>
              );
            })}
          </select>
          <select name="month" onChange={(e) => this.ScheduleAdd(e)}>
            {monthCount.map((cnt2, month) => {
              if (cnt2 < 10)
                if (cnt2 == new Date().getMonth() + 1)
                  return (
                    <option defaultValue value={cnt2} key={month} selected>
                      0{cnt2}
                    </option>
                  );
                else
                  return (
                    <option defaultValue value={cnt2} key={month}>
                      0{cnt2}
                    </option>
                  );
              if (cnt2 >= 10)
                if (cnt2 == new Date().getMonth() + 1)
                  return (
                    <option defaultValue value={cnt2} key={month} selected>
                      {cnt2}
                    </option>
                  );
                else
                  return (
                    <option key={month} value={cnt2}>
                      {cnt2}
                    </option>
                  );
            })}
          </select>
          <select name="day" onChange={(e) => this.ScheduleAdd(e)}>
            {dayCount.map((cnt3, day) => {
              if (cnt3 < 10)
                if (cnt3 == new Date().getDate())
                  return (
                    <option defaultValue value={cnt3} key={day} selected>
                      0{cnt3}
                    </option>
                  );
                else
                  return (
                    <option defaultValue value={cnt3} key={day}>
                      0{cnt3}
                    </option>
                  );
              if (cnt3 >= 10)
                if (cnt3 == new Date().getDate())
                  return (
                    <option defaultValue value={cnt3} key={day} selected>
                      {cnt3}
                    </option>
                  );
                else
                  return (
                    <option key={day} value={cnt3}>
                      {cnt3}
                    </option>
                  );
            })}
          </select>
          <input className="ScheduleAddBtn" type="submit" value="Add" />
        </form>
        {}
      </div>
    );
  }
}
export default ScheduleAdd;
