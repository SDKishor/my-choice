import React from "react";
import { ReviewCard } from "../components/ReviewCard";
import useReviewData from "../hooks/useReviewData";
import "./reviews.css";

export const Reviews = () => {
  const [reviewsdata, setReviewsdata] = useReviewData();

  return (
    <div className="reviews">
      <h2>Customars Feedback</h2>
      <div className="reviewContainer">
        {reviewsdata.map((review) => (
          <ReviewCard
            key={review.id}
            comment={review.comment}
            userName={review.userName}
            image={review.image}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};
