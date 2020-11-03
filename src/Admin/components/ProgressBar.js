import React from "react";
import "../admin.css";

const ProgressBar = ({ progress }) => {
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
