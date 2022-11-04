import React from "react";

import "./style.css";

export default function ListItems({ data }) {
  return (
    <div className="container-list">
      {data.map((item, index) => (
        <div className="item">
          <div className="item-num">{index + 1}</div>
          <div className="item-word">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
