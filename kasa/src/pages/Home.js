import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner src="./pictures/IMG.png" title="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
