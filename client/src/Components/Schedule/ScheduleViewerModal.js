import { Component } from "react";
import React from "react";

class ScheduleViewerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      update: false,
      uid: sessionStorage.getItem("uid"),
    };
  }

  render() {
    return <div>aaa</div>;
  }
}

export default ScheduleViewerModal;
