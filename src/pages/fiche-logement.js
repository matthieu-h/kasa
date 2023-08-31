import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/housing.json";

const HousingCard = () => {
  let { logementId } = useParams();
  const housingObject = data.find((e) => e.id === logementId);
  const navigate = useNavigate();
  useEffect(() => {
    if (!housingObject) {
      navigate("./pages/erreur-404");
    }
  });
  if (housingObject) {
    return (
      <div className="housing">
        <img src={housingObject.pictures[0]} alt="photos du logement" />
      </div>
    );
  }
};

export default HousingCard;
