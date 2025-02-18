import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApartment } from "../../context/ApartmentContextProvider";

const EditApartment = () => {
  const { id } = useParams();
  const {
    oneApartment,
    getOneApartment,
    categories,
    getCategories,
    editApartment,
    getApartments,
  } = useApartment();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [education, setEducation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [count_views, setCountViews] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getCategories();
    getOneApartment(id);
  }, [id]);

  useEffect(() => {
    if (oneApartment) {
      setTitle(oneApartment.title || "");
      setLocation(oneApartment.location || "");
      setPrice(oneApartment.price || "");
      setEducation(oneApartment.education || "");
      setEducation(oneApartment.image || "");
      setDescription(oneApartment.description || "");
      setCountViews(oneApartment.count_views || "");
      setCategory(oneApartment.category || "");
    }
  }, [oneApartment]);

  const handleClick = () => {
    const updatedApartment = {
      title,
      location,
      price: price.toString(),
      education,
      description,
      count_views,
      category,
    };
    editApartment(id, updatedApartment);
    getApartments();
  };

  return (
    <div>
      <h1>Edit Apartment</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Название"
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="Локация"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Цена"
      />
      <input
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        type="text"
        placeholder="Характеристики что есть"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        placeholder="image"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Описание"
      />
      <input
        value={count_views}
        onChange={(e) => setCountViews(e.target.value)}
        type="number"
        placeholder="Количество просмотров"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Категории</option>
        {categories &&
          categories.map((elem) => (
            <option value={elem.name} key={elem.name}>
              {elem.name}
            </option>
          ))}
      </select>
      <button onClick={handleClick}>Save Changes</button>
    </div>
  );
};

export default EditApartment;
