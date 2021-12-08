import React from "react";
import About from "./About/About";
import AllReviews from "./AllReviews/AllReviews";
import Banner from "./Banner/Banner";
import Contract from "./Contract/Contract";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <AllReviews />
      <Contract />
    </>
  );
};

export default Home;
