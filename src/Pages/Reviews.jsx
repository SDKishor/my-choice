import React, { useEffect, useState } from "react";
import { ReviewCard } from "../components/ReviewCard";

export const Reviews = () => {
  const [reviewsdata, setReviewsdata] = useState([]);

  useEffect(() => {
    fetch("reviewsdata.json")
      .then((res) => res.json())
      .then((data) => setReviewsdata(data));
  }, []);

  return (
    <div className="reviews">
      <h2>All Reviews</h2>
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
