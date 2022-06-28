import React from "react";
import Common from "./Common";
import img from "./reactimg.svg";

let Home = () => {
  return (
    <>
      <Common
        name=" Grow Your Business With "
        visit="/services"
        imgsrc={img}
        btname="Get Started"
      />
    </>
  );
};

export default Home;
