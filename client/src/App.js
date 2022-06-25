import { Component } from "react";

import React, { useState } from "react";

import {
  GNB,
  NotFound,
  Practice,
  PracticeTwo,
} from "./mainContents/mainExport";
import {
  ScheduleMain,
  ScheduleDelete,
  ScheduleAdd,
  testView,
  ScheduleAddSelect,
  testViewTwo,
  ScheduleDeleteModal,
  ScheduleDeleteSelect,
} from "./Components/Schedule/ScheduleExport";
import { SignUp, SignIn } from "./Components/Sign/SignExport";

import UserSelect from "./Components/User/UserSelect";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <GNB></GNB>

          <Switch>
            {/* 메인하나 */}
            <Route exact path="/" component={SignIn} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />

            <Route path="/ScheduleMain" component={ScheduleMain} />
            <Route path="/ScheduleAdd/" component={ScheduleAdd} />
            <Route
              path="/ScheduleAddSelect/:Date"
              component={ScheduleAddSelect}
            />
            <Route path="/ScheduleDelete" component={ScheduleDelete} />
            <Route
              path="/ScheduleDeleteSelect/:Date/:Title/"
              component={ScheduleDeleteSelect}
            />
            {/* 
            <Route
              path="/ScheduleUpdate/:Date/:Title/:content/:location/:time/:etc" component={}/> */}
            <Route path="/UserSelect" component={UserSelect} />

            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
