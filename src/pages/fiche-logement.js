import { useParams } from "react-router-dom";
import data from "../assets/housing.json";
import Slideshow from "../components/Slideshow";
import Informations from "../components/Information";
import Collapse from "../components/Collapse";
import Error404 from "./erreur-404";

const HousingCard = () => {
  let { logementId } = useParams();
  const housingObject = data.find((e) => e.id === logementId);

  if (!housingObject) {
    return <Error404 />;
  }

  const picturesArray = housingObject.pictures;
  const title = housingObject.title;
  const location = housingObject.location;

  const tagsArray = housingObject.tags;
  const genereTags = tagsArray.map((tags, index) => (
    <li key={index}>{tags}</li>
  ));

  const hostObject = housingObject.host;
  const hostName = hostObject.name;
  const hostPicture = hostObject.picture;

  const rating = Number(housingObject.rating);
  const stars = Array(rating).fill(
    <i className="fa-solid fa-star fa-lg full"></i>
  );
  const genereStars = stars.map((rating, index) => (
    <li key={index}>{rating}</li>
  ));

  const description = housingObject.description;

  const equipmentsArray = housingObject.equipments;
  const genereEquipments = equipmentsArray.map((equipments, index) => (
    <li key={index}>{equipments}</li>
  ));

  if (housingObject) {
    return (
      <div>
        <Slideshow pictures={picturesArray} />
        <Informations
          title={title}
          location={location}
          tags={genereTags}
          name={hostName}
          hostPicture={hostPicture}
          rating={genereStars}
        />
        <div className="collapses">
          <Collapse title="Description" content={description} />
          <Collapse title="Équipements" content={genereEquipments} />
        </div>
      </div>
    );
  }
};

export default HousingCard;
