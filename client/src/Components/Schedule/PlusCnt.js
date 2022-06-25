import React from "react";

function PlusCnt(props) {
  let { aaaaa } = props; // 상위 컴포넌트에서 전달받은 props 할당

  return <div style={{ color: "blue" }}>{aaaaa}aaaa</div>;
}
export default PlusCnt;
