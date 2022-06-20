import { Component } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const TestViewTwo = (props) => {
  // encodeURI(encodeURIComponent(name));
  const abc = props.match.params.Key;

  return <div>aa{abc}aaaaa</div>;
};

export default TestViewTwo;
