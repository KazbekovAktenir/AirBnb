import React from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import EditApartment from "./EditApartment";

const ApartmentCard = ({ elem }) => {
  const { deleteApartment } = useApartment();
  console.log(`Apartment ID: ${elem.id}, is_author: ${elem.owner}`);
  return (
    <div>
      Title: {elem.title}
      Location: {elem.location}
      Education: {elem.education}
      Description: {elem.description}
      CountViews: {elem.countViews}
      Category: {elem.category}
      {elem.owner ? (
        <>
          <button onClick={() => deleteApartment(elem.id)}>DELETE</button>{" "}
          <button onClick={() => EditApartment(elem.id)}>Edit Apartment</button>
        </>
      ) : null}
    </div>
  );
};

export default ApartmentCard;
