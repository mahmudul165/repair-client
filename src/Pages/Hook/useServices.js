import React, { useEffect, useState } from "react";

const useServices = () => {
  const axios = require("axios");
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/services`).then((res) => {
      setServices(res.data);
      // console.log("my services is", services);
    });
  }, []);
  return [services, setServices];
};

export default useServices;
