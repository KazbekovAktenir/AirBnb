import React, { useEffect, useState } from "react";
import { useApartment } from "../../context/ApartmentContextProvider";

const AddApartment = () => {
  const { categories, addApartment, getCategories } = useApartment();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [count_views, setCountViews] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    console.log("Категории в компоненте AddApartment:", categories);
  }, [categories]);

  const handleClick = (apartment) => {
    const newApartment = new FormData();
    newApartment.append("title", title);
    newApartment.append("location", location);
    newApartment.append("price", price);
    newApartment.append("education", education);
    newApartment.append("description", description);
    newApartment.append("count_views", count_views);
    newApartment.append("category", category);
    addApartment(newApartment);
  };

  return (
    <div>
      <h1>Add Apartment</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Название"
      />
      <input
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="Локация"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        // type="text"
        type="number"
        placeholder="Цена"
      />
      <input
        onChange={(e) => setEducation(e.target.value)}
        type="text"
        placeholder="Характеристики что есть"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Описание"
      />
      <input
        onChange={(e) => setCountViews(e.target.value)}
        type="number"
        placeholder="Количество просмотров"
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Категории</option>
        {categories &&
          categories.map((elem) => (
            <option value={elem.name} key={elem.name}>
              {elem.name}
            </option>
          ))}
      </select>
      <button onClick={handleClick}>Add Apartment</button>
    </div>
  );
};

export default AddApartment;
