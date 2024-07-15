import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import ApartmentList from "../components/apartments/ApartmentList";
import EditApartment from "../components/apartments/EditApartment";
import AddApartment from "../components/apartments/AddApartment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>пока что Home Page</h1>} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
      <Route path="/addApartment" element={<AddApartment />} />
      <Route path="/apartmentList" element={<ApartmentList />} />
      <Route path="/editApartment/:id" element={<EditApartment />} />
    </Routes>
  );
};

export default MainRoutes;
