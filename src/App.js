import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/erreur-404";
import About from "./pages/a-propos";
import HousingCard from "./pages/fiche-logement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { about, error404, home, housing } from "./routes";

// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={about} element={<About />} />
        <Route path={housing} element={<HousingCard />} />
        <Route path={error404} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
