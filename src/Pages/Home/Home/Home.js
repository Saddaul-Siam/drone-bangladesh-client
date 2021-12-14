import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FeaturedProduct from "../Featured Product/FeaturedProduct";
import SmartFeature from "../SmartFeature/SmartFeature";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Feature />
      <FeaturedProduct />
      <SmartFeature />
    </div>
  );
};

export default Home;
