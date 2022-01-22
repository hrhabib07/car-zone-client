import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import BestCar from "../BestCar/BestCar";
import Highlight from "../Highlight/Highlight";
import TopBanner from "../TopBanner/TopBanner";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Welcome></Welcome>
      <Highlight></Highlight>
      <BestCar></BestCar>
      <Footer></Footer>
    </div>
  );
};

export default Home;
