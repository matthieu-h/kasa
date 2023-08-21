import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Erreur404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-propos" element={<APropos />} />
        <Route path="*" element={<Erreur404 />} />
        <Route path="/Fiche-Logement" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
