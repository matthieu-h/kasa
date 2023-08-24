import React from "react";

const Banner = ({ src, title }) => {
  return (
    <div className="banner">
      <img src={src} alt="" />
      <div className="banner__overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
