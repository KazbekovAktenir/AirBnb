import React from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import { Link } from "react-router-dom";
import "./ApartmentCard.css";
import { useCart } from "../../context/CartContextProvider";

const ApartmentCard = ({ elem }) => {
  const { deleteApartment } = useApartment();
  const { addApartmentToCart } = useCart();
  console.log(`Apartment ID: ${elem.id}, is_author: ${elem.owner}`);
  return (
    <div className="apartment_card">
      Title: {elem.title}
      Location: {elem.location}
      Education: {elem.education}
      Description: {elem.description}
      CountViews: {elem.countViews}
      Category: {elem.category}
      {elem.owner ? (
        <>
          <button className="buttons" onClick={() => deleteApartment(elem.id)}>
            DELETE
          </button>
          <Link to={`/editApartment/${elem.id}`}>
            <button className="edit_button">Edit Apartment</button>
          </Link>
          <button onClick={() => addApartmentToCart(elem)}>Add To Cart</button>
        </>
      ) : null}
    </div>
  );
};

export default ApartmentCard;
