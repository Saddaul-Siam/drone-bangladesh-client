import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FeaturedProduct from "../Featured Product/FeaturedProduct";
import LatestBlog from "../LatestBlog/LatestBlog";
import ProfessionalDrone from "../ProfessionalDrone/ProfessionalDrone";
import SmartFeature from "../SmartFeature/SmartFeature";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Feature />
      <FeaturedProduct />
      <ProfessionalDrone />
      <SmartFeature />
      <LatestBlog />
      <Subscribe />
    </div>
  );
};

export default Home;
