import React from "react";
import "../style/Example.css";

const Example = props => {
  return (
    <div className="example">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="image">
        <img src={props.image} alt="" height="200px" width="340px" />
      </div>
      <div className="gitLink">
        <a href={props.url} target="_blank">Website</a> | <a href={props.git} target="_blank">GitHub</a>
      </div>
    </div>
  );
};

export default Example;
