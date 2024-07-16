// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useApartment } from "../../context/ApartmentContextProvider";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useApartment } from "../../context/ApartmentContextProvider";

// const EditApartment = () => {
//   const { id } = useParams(); // Получение ID квартиры из URL
//   const { oneApartment, getOneApartment, editApartment } = useApartment(); // Доступ к функциям контекста
//   const [apartment, setApartment] = useState({
//     title: "",
//     location: "",
//     price: 0,
//     education: "",
//     description: "",
//     count_views: 0,
//   });
//   const navigate = useNavigate(); // Для навигации после успешного редактирования

//   useEffect(() => {
//     getOneApartment(id); // Получение информации о квартире при загрузке компонента
//   }, [id, getOneApartment]);

//   useEffect(() => {
//     if (oneApartment) {
//       setApartment({
//         title: oneApartment.title || "",
//         location: oneApartment.location || "",
//         price: oneApartment.price || 0,
//         education: oneApartment.education || "",
//         description: oneApartment.description || "",
//         count_views: oneApartment.count_views || 0,
//       });
//     }
//   }, [oneApartment]);

//   const handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     setApartment((prevState) => ({
//       ...prevState,
//       [name]: type === "number" ? Number(value) : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await editApartment(id, apartment);
//       navigate(`/apartments/${id}`); // Перенаправление на страницу квартиры после успешного редактирования
//     } catch (error) {
//       console.error("Ошибка при редактировании квартиры:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Apartment</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="title"
//           type="text"
//           placeholder="Title"
//           value={apartment.title}
//           onChange={handleInputChange}
//         />
//         <input
//           name="location"
//           type="text"
//           placeholder="Location"
//           value={apartment.location}
//           onChange={handleInputChange}
//         />
//         <input
//           name="price"
//           type="number"
//           placeholder="Price"
//           value={apartment.price}
//           onChange={handleInputChange}
//         />
//         <input
//           name="education"
//           type="text"
//           placeholder="Education"
//           value={apartment.education}
//           onChange={handleInputChange}
//         />
//         <input
//           name="description"
//           type="text"
//           placeholder="Description"
//           value={apartment.description}
//           onChange={handleInputChange}
//         />
//         <input
//           name="count_views"
//           type="number"
//           placeholder="Count Views"
//           value={apartment.count_views}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditApartment;

import React from "react";

const EditApartment = () => {
  return <div></div>;
};

export default EditApartment;
