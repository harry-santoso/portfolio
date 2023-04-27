import React from "react";
import { NavLink } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.img} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
      </div>
      <div className="project-btns">
        {/* <NavLink to={props.view}  className="btn">
          View
        </NavLink> */}
        <a href={props.source} target="_blank" rel="noreferrer" className="btn">
          Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
