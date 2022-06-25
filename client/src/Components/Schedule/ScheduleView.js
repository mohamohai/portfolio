import React, { Component } from "react";
import axios from "axios";

class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      update: false,
    };
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <div>
          <ul>
            <li>여기가 viewer</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ScheduleView;
