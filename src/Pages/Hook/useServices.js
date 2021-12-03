import React, { useEffect, useState } from "react";

const useServices = () => {
  const axios = require("axios");
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setServices(res.data);
      console.log("my services is", services);
    });
  }, []);
  return [services];
};

export default useServices;
