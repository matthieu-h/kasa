import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/housing.json";

const HousingCard = () => {
  let { logementId } = useParams();
  const housingObject = data.find((e) => e.id === logementId);
  return (
    <div className="housing">
      <img src={housingObject.pictures[0]} alt="photos du logement" />
    </div>
  );
};

export default HousingCard;
