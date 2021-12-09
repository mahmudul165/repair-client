import React, { useEffect, useState } from "react";

const useReviews = () => {
  const axios = require("axios");
  const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://shielded-forest-05561.herokuapp.com/reviews`).then((res) => {
  //     setReviews(res.data);
  //     // console.log("my services is", services);
  //   });
  // }, []);

  useEffect(async () => {
    const result = await axios.get(
      "https://shielded-forest-05561.herokuapp.com/reviews"
    );
    setReviews(result.data);
  });
  return [reviews, setReviews];
};

export default useReviews;
