import React from "react";
import { Spin } from "antd";
import Colors from "../assets/style";
const { darkgrey, violet, lightgrey } = Colors;

function Spinner(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: props.color,
      }}
    >
      <Spin size="large" />
      <h2 style={{ color: violet, margin: "24px 0" }}>{props.text}</h2>
    </div>
  );
}

export default Spinner;
