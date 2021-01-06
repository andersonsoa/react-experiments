import React from "react";

const Emoji = (props) => (
  <span
    style={props.style}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    className={props.className}
  >
    {props.symbol}
  </span>
);

export default Emoji;