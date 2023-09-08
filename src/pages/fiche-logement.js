import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/housing.json";
import Slideshow from "../components/Slideshow";

const HousingCard = () => {
  let { logementId } = useParams();
  const housingObject = data.find((e) => e.id === logementId);
  const picturesArray = housingObject.pictures;
  const navigate = useNavigate();
  useEffect(() => {
    if (!housingObject) {
      navigate("./pages/erreur-404");
    }
  });
  if (housingObject) {
    return <Slideshow pictures={picturesArray} />;
  }
};

export default HousingCard;
