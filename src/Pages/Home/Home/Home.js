import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FeaturedProduct from "../Featured Product/FeaturedProduct";
import LatestBlog from "../LatestBlog/LatestBlog";
import Products from "../Products/Products";
import ProfessionalDrone from "../ProfessionalDrone/ProfessionalDrone";
import SmartFeature from "../SmartFeature/SmartFeature";
import Subscribe from "../Subscribe/Subscribe";

const Home = ({ handleOpen, handleClose, open }) => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Feature />
      <FeaturedProduct />
      <ProfessionalDrone />
      <SmartFeature />
      <Products handleOpen={handleOpen} handleClose={handleClose} open={open} />
      <LatestBlog />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
