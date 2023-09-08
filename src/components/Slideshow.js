import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/housing.json";

const Slideshow = () => {
  // création d'un tableau avec les url des images
  let { logementId } = useParams();
  const housingObject = data.find((e) => e.id === logementId);
  const picturesArray = housingObject.pictures;

  // compteur du carrousel
  const [index, setIndex] = useState(0);
  const length = picturesArray.length;

  const previousArrow = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const nextArrow = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="housing">
      <img src={picturesArray[index]} alt="photos du logement" />
      <button onClick={previousArrow}>Previous</button>
      <button onClick={nextArrow}>Next</button>
      <p>
        {index + 1}/{length}
      </p>
    </div>
  );
};

export default Slideshow;
