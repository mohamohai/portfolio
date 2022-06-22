import { Component } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const TestViewTwo = (props) => {
  // encodeURI(encodeURIComponent(name));
  let abc = window.location.href; //주소 따기
  let aaa = decodeURI(decodeURIComponent(abc)); // 만약 한글이면 안깨지게
  console.log(props); // 이건 그냥 가져온 props
  const title = props.match.params.title; //여기서부터 key 변수
  const Date = props.match.params.Date; //여기서부터 key 변수
  return (
    <div>
      a{title}
      <br></br>
      {Date}
    </div>
  );
};

export default TestViewTwo;
