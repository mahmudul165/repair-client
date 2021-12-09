import React, { useEffect, useState } from "react";

const useServices = () => {
  const axios = require("axios");
  const [services, setServices] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://shielded-forest-05561.herokuapp.com/services`).then((res) => {
  //     setServices(res.data);
  //     // console.log("my services is", services);
  //   });
  // }, []);

  useEffect(async () => {
    const result = await axios.get(
      "https://shielded-forest-05561.herokuapp.com/services"
    );
    setServices(result.data);
  });
  return [services, setServices];
};

export default useServices;
