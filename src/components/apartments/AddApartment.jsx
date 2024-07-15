import React, { useState } from "react";

const AddApartment = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [education, setEducation] = useState("");
  const [description, setDescription] = useState("");
  const [countViews, setCountViews] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <h1>Add Apartment</h1>
      <input type="text" placeholder="Название" />
      <input type="text" placeholder="Локация" />
      <input type="number" placeholder="Цена" />
      <input type="text" placeholder="Характеристики что есть" />
      <input type="text" placeholder="Описание" />
      <input type="number" placeholder="Количество просмотров" />
      <select>
        <option value="">Категории</option>
        <option></option>
      </select>
    </div>
  );
};

export default AddApartment;
