import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  const previousArrow = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const nextArrow = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  if (length === 1) {
    return (
      <div className="housing__slideshow">
        <img
          src={pictures[index]}
          alt="photos du logement"
          className="housing__slideshow-picture"
        />
      </div>
    );
  }
  if (length >= 1) {
    return (
      <div className="housing__slideshow">
        <img
          src={pictures[index]}
          alt="photos du logement"
          className="housing__slideshow-picture"
        />
        <img
          src="/pictures/arrow-left.svg"
          alt="flèche gauche"
          className="housing__slideshow-arrow-left"
          onClick={previousArrow}
        />
        <img
          src="/pictures/arrow-right.svg"
          alt="flèche droite"
          className="housing__slideshow-arrow-right"
          onClick={nextArrow}
        />
        <div className="housing__slideshow-index">
          {index + 1}/{length}
        </div>
      </div>
    );
  }
};

export default Slideshow;
