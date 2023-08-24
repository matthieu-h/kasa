import React from "react";
import data from "../assets/housing.json";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <ul className="gallery__display">
          {data.map((item) => (
            <li key={item.id} className="gallery__display-card">
              <img src={item.pictures[0]} alt="photos du logement" />
              <div className="gallery__display-card-overlay">
                <h2>{item.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
