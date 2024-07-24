import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApartment } from "../../context/ApartmentContextProvider";
import { useComment } from "../../context/CommentContextProvider";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const { getApartment, apartment } = useApartment();
  const { getComments, comments } = useComment();
  const [apartmentDetails, setApartmentDetails] = useState(null);
  const [apartmentComments, setApartmentComments] = useState([]);

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        console.log(`Fetching details for ID: ${id}`);
        const data = await getApartment(id);
        console.log("Apartment details:", data);
        setApartmentDetails(data);
        await getComments(id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApartmentDetails();
  }, [id, getApartment, getComments]);

  useEffect(() => {
    setApartmentComments(
      comments.filter((comment) => comment.apartment === id)
    );
  }, [comments, id]);

  return (
    <div className="apartment_detail_container">
      <img
        className="apartment_detail_img"
        src={apartmentDetails.image}
        alt="apartment"
      />
      <h3>{apartmentDetails.title}</h3>
      <p>Цена: {apartmentDetails.price}</p>
      <p>Местоположение: {apartmentDetails.location}</p>
      <p>Образование: {apartmentDetails.education}</p>
      <p>Описание: {apartmentDetails.description}</p>
      <p>Количество просмотров: {apartmentDetails.countViews}</p>
      <p>Категория: {apartmentDetails.category}</p>
      <div className="comments_list">
        <p>Комментарии:</p>
        {apartmentComments.map((comment) => (
          <div key={comment.id} className="comment_item">
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
