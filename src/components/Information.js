import React from "react";

const Informations = ({ title, location, tags, name, hostPicture, rating }) => {
  return (
    <div className="informations">
      <div className="informations__titleLocTag">
        <h1 className="informations__titleLocTag-title">{title}</h1>
        <h2 className="informations__titleLocTag-location">{location}</h2>
        <ul className="informations__titleLocTag-tag">{tags}</ul>
      </div>

      <div className="informations__hostRating">
        <div className="informations__hostRating-host">
          <div className="informations__hostRating-hostName">{name}</div>
          <img
            src={hostPicture}
            alt="illustration de l'hôte"
            className="informations__hostRating-hostPicture"
          />
        </div>
        <div className="informations__hostRating-rating">{rating}</div>
      </div>
    </div>
  );
};

export default Informations;
