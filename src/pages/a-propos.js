import React from "react";
import Banner from "../components/Banner";
import Value from "../components/Value";

const About = () => {
  return (
    <>
      <Banner src="./pictures/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png" />
      <Value
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
      />
      <Value
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Value
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Value
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes.
        "
      />
    </>
  );
};

export default About;

// Fiabilité
