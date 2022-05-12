import React from "react";
import "./blogs.css";

export const Blogs = () => {
  return (
    <div className="blogs">
      <h2>BLOGS</h2>
      <div className="questionContainer">
        <div className="question">
          <h3>Q1: What is context API?</h3>
          <p>
            context api is a react hook. which is use to pass data from parent
            to children or grandchildren or through every level of tree without
            using props drilling method. It act like a global variable.
          </p>
        </div>

        <div className="question">
          <h3>Q2: What is Semantic tag?</h3>
          <p>
            Semantic Html element are those element tag that are meaningful that
            human and machine can read easyly. like header tag, section tag,
            footer tag etc.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
