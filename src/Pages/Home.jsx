import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../components/ReviewCard";
import useReviewData from "../hooks/useReviewData";
import "./home.css";

export const Home = () => {
  const [reviewsdata, setReviewsdata] = useReviewData();

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="heroSection">
        <div className="heroContent">
          <h1>
            get the best experience <br />
            <span> money can buy</span>{" "}
          </h1>
          <p>
            it is a nice laptop. it is very lite weight and easy to carry. the
            battary backup of this laptop is very good. and also charge up
            pretty fast
          </p>
        </div>
        <div className="heroImage">
          <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07966512.png" />
        </div>
      </div>

      <div className="commentSection">
        <h2>customer Reviews</h2>
        <div className="cardContainer">
          {reviewsdata.map(
            (review, index) =>
              index <= 2 && (
                <ReviewCard
                  key={review.id}
                  comment={review.comment}
                  userName={review.userName}
                  image={review.image}
                  rating={review.rating}
                />
              )
          )}
        </div>

        <button
          className="seeAllBtn"
          onClick={() => {
            navigate("/reviews");
          }}
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};
