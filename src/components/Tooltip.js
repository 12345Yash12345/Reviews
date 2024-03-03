import React from "react";

function Tooltip({ topic, position }) {
  return (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px",
        borderRadius: "5px"
      }}
    >
      {topic}
    </div>
  );
}

export default Tooltip;
