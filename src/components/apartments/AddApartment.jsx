import React, { useEffect, useState } from "react";
import { useApartment } from "../../context/ApartmentContextProvider";
import { Link } from "react-router-dom";
import "./AddApartment.css";

const AddApartment = () => {
  const { categories, addApartment, getCategories } = useApartment();
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
  }, []);

  useEffect(() => {}, [categories]);

  const handleClick = (apartment) => {
    const newApartment = new FormData();
    newApartment.append("title", title);
    newApartment.append("location", location);
    newApartment.append("price", price);
    newApartment.append("education", education);
    newApartment.append("image", image);
    newApartment.append("description", description);
    newApartment.append("count_views", count_views);
    newApartment.append("category", category);
    addApartment(newApartment);
  };

  return (
    <div className="body5">
      <div className="container5">
        <h2>Add Apartment</h2>

        <table>
          <tr>
            <td>
              <label>Title:</label>
            </td>
            <td>
              <input
                className="inp"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Location:</label>
            </td>
            <td>
              <input
                className="inp"
                type="text"
                id="price"
                name="price"
                onChange={(e) => setLocation(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="quantity">Price:</label>
            </td>
            <td>
              <input
                className="inp"
                type="number"
                id="quantity"
                name="quantity"
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="quantity">Education:</label>
            </td>
            <td>
              <input
                className="inp"
                type="text"
                id="quantity"
                name="quantity"
                onChange={(e) => setEducation(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="quantity">Image:</label>
            </td>
            <td>
              <input
                className="inp"
                type="file"
                id="quantity"
                name="quantity"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="quantity">Description:</label>
            </td>
            <td>
              <input
                className="inp"
                type="text"
                id="quantity"
                name="quantity"
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="quantity">Number of views:</label>
            </td>
            <td>
              <input
                className="inp"
                type="number"
                id="quantity"
                name="quantity"
                onChange={(e) => setCountViews(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Category</label>
            </td>
            <td>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option>Category</option>
                {categories &&
                  categories.map((elem) => (
                    <option value={elem.name} key={elem.name}>
                      {elem.name}
                    </option>
                  ))}
              </select>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <Link to={"/apartmentList"}>
                <button id="addItemBtn" onClick={handleClick}>
                  Add Apartment
                </button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddApartment;
