import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const toggle = (e) => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse__bar">
        {title}
        <i
          className={`fa-solid fa-chevron-up fa-lg collapse__bar-icon ${
            open && "open"
          }`}
          onClick={toggle}
        ></i>
      </div>
      <p className={`collapse__content ${open && "open"}`}>{content}</p>
    </div>
  );
};

export default Collapse;
