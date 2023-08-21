import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <Banner src="./pictures/IMG.png" title="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  );
};

export default Home;
