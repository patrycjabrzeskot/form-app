import React from "react";

export default function Title(props) {
  return (
    <>
      <p style={{ color: "blue", fontWeight: "bold" }}>
        {props.number}. {props.title}
      </p>
    </>
  );
}
