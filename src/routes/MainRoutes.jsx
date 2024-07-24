import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import ApartmentList from "../components/apartments/ApartmentList";
import EditApartment from "../components/apartments/EditApartment";
import AddApartment from "../components/apartments/AddApartment";
import CartPage from "../pages/CartPage";
import ForgotPassword from "../auth/ForgotPassword";
import Forgot from "../auth/Forgot";
import Change from "../auth/Change";
import HomePage from "../pages/HomePage";
import Detail from "../components/apartments/Detail";
import Buy from "../components/homePage/Buy";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/changePassword" element={<Change />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
      <Route path="/addApartment" element={<AddApartment />} />
      <Route path="/apartmentList" element={<ApartmentList />} />
      <Route path="/editApartment/:id" element={<EditApartment />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
  );
};

export default MainRoutes;
