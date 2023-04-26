import React from "react";
import "./SectionHeadingStyle.css";

function SectionHeading(props) {
  return (
    <div className="section-container">
      <h1 className="section-default">public class </h1>
      <h1 className="section-heading">{props.text}</h1>
    </div>
  );
}

export default SectionHeading;
