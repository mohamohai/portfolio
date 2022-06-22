import { Component } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ScheduleDeleteModal = (props) => {
  // encodeURI(encodeURIComponent(name));
  const abc = props.match.params.Key2;

  return (
    <div>
      aa{abc}aaaaa
      {console.log(props.match.params)}
    </div>
  );
};

export default ScheduleDeleteModal;
