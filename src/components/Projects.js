import React from "react";
import Example from "./Example";
import "../style/Projects.css";

const Projects = props => {

  return (
    <div className="projects">
      <div className="examples">
        {props.examples.map((example, index) => {
          return (
            <Example
              key={index}
              title={example.title}
              image={example.image}
              url={example.url}
              git={example.git}
            />          
          );           
        })}
      </div>
    </div>
  );
};

export default Projects;
