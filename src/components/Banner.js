import React from "react";

const Banner = (picture) => {
  return (
    <>
      <div className="banner">
        <img src={picture.src} alt="" />
        <h1>{picture.title}</h1>
      </div>
    </>
  );
};

export default Banner;
