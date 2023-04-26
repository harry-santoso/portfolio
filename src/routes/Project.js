import React from "react";
import ProjectList from "../components/ProjectList";
import SectionHeading from "../components/SectionHeading";

function Project() {
  return (
    <div id="project">
      <SectionHeading text="Projects" />
      <ProjectList />
    </div>
  );
}

export default Project;
