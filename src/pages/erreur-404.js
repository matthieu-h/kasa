import React from "react";
import { NavLink } from "react-router-dom";
import { home } from "../routes";

const Error404 = () => {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to={home} className="error404__link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error404;
