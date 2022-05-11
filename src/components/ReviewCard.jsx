import React from "react";
import "./reviewCard.css";

export const ReviewCard = ({ comment, userName, image, rating }) => {
  return (
    <div className="ReviewCard">
      <div className="upper">{comment}</div>
      <div className="lower">
        <div className="imgsec">
          <img src={image} />
        </div>
        <div className="userInfo">
          <h3>{userName}</h3>
          <h4>{rating}</h4>
        </div>
      </div>
    </div>
  );
};
