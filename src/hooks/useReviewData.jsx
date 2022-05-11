import { useEffect, useState } from "react";

const useReviewData = () => {
  const [reviewsdata, setReviewsdata] = useState([]);

  useEffect(() => {
    fetch("reviewsdata.json")
      .then((res) => res.json())
      .then((data) => setReviewsdata(data));
  }, []);

  return [reviewsdata, setReviewsdata];
};

export default useReviewData;
