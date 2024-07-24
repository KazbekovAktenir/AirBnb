import React, { useState, useEffect } from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { useComment } from "../../context/CommentContextProvider";
import { Link } from "react-router-dom";
import "./ApartmentCard.css";

const ApartmentCard = ({ elem }) => {
  const { deleteApartment } = useApartment();
  const { addApartmentToCart } = useCart();
  const { currentUser } = useAuth();
  const { comments, addComment, getComments } = useComment();

  const [commentText, setCommentText] = useState("");
  const [apartmentComments, setApartmentComments] = useState([]);

  const isOwner = currentUser && currentUser === elem.owner;

  useEffect(() => {
    const fetchComments = async () => {
      await getComments(elem.id);
    };
    fetchComments();
  }, [elem.id, getComments]);

  useEffect(() => {
    setApartmentComments(
      comments.filter((comment) => comment.apartment === elem.id)
    );
  }, [comments, elem.id]);

  const handleAddComment = async () => {
    if (commentText.trim()) {
      await addComment({ body: commentText, apartment: elem.id });
      setCommentText("");
    }
  };

  return (
    <div className="apartment_card_container">
      <Link
        to={`/detail/${elem.id}`}
        onClick={() => console.log(`Navigating to /detail/${elem.id}`)}
        className="apartment_card"
      >
        <img className="apartment_card_img" src={elem.image} alt="apartment" />
        <h3>{elem.title}</h3>
        <p>Цена: {elem.price}</p>
      </Link>
      <p>Комментарии:</p>
      <div className="comments_list">
        {apartmentComments.map((comment) => (
          <div key={comment.id} className="comment_item">
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <div className="add_comment_section">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Добавить комментарий..."
        />
        <button onClick={handleAddComment}>Добавить</button>
      </div>
      {isOwner && (
        <div className="apartment_card_actions">
          <button
            className="deleteApartment_btn"
            onClick={() => deleteApartment(elem.id)}
          >
            УДАЛИТЬ
          </button>
          <Link to={`/editApartment/${elem.id}`}>
            <button className="edit_button">Редактировать квартиру</button>
          </Link>
          <button onClick={() => addApartmentToCart(elem)}>
            Добавить в корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
