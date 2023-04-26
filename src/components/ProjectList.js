import React from "react";
import "./ProjectListStyle.css";
import ProjectCard from "./ProjectCard";
import data from "./ProjectCardData";

function ProjectList() {
  return (
    <div className="project-section">
      <div className="project-container">
        {data.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              img={val.img}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
