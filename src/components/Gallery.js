import React from "react";
import data from "../assets/housing.json";
import { NavLink } from "react-router-dom";
// import { housing } from "../routes";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul className="gallery__display">
        {data.map((item) => (
          <NavLink
            to={"/logement/" + item.id}
            className={"gallery__display-link"}
          >
            <li key={item.id} className="gallery__display-card">
              <img src={item.pictures[0]} alt="photos du logement" />
              <div className="gallery__display-card-overlay">
                <h2>{item.title}</h2>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
