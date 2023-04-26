import React from "react";
import "./AboutContentStyle.css";
import ExperienceData from "./ExperienceData";

function AboutContent() {
  return (
    <div className="about">
      <div className="about-me">
        <h1>Who Am I?</h1>
        <p>
          I'm a fresh graduate Master of IT student specalizing in Full Stack
          Development. I am still learning everyday to improve myself and keep
          working on 1 project at a time :)
        </p>
      </div>
      <div className="experience">
        {ExperienceData.map((val, ind) => {
          return (
            <>
              <h1 className="company">
                [{ind}] {val.company}
              </h1>
              <h4 className="year">{val.year}</h4>
              <h4 className="position">{val.position}</h4>
              <p>{val.text}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AboutContent;
