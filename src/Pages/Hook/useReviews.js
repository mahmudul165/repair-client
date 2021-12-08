import React, { useEffect, useState } from "react";

const useReviews = () => {
  const axios = require("axios");
  const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/reviews`).then((res) => {
  //     setReviews(res.data);
  //     // console.log("my services is", services);
  //   });
  // }, []);

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/reviews");
    setReviews(result.data);
  });
  return [reviews, setReviews];
};

export default useReviews;
