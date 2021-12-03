import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import ExploreServices from "./ExploreServices/ExploreServices";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ExploreServices />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
