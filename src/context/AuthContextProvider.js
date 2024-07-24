import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  //!sign-up
  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post(`${API}/account/sign-up/`, formData);
      console.log("Регистрация успешна:", response.data);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  //!sign-in
  const handleSignIn = async (formData, email) => {
    try {
      const { data } = await axios.post(`${API}/account/sign-in/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //! checkAuth
  const checkAuth = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const { data } = await axios.post(`${API}/account/refresh/`, {
        refresh: tokens.refresh,
      });

      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: data, refresh: tokens.refresh })
      );
      const email = JSON.parse(localStorage.getItem("email"));
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
    }
  };

  //!logout
  const handleLogOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/sign-in");
  };

  // ! handleChange
  const handleChange = async (formData) => {
    try {
      await axios.post(`${API}/account/change_password/`, formData);
    } catch (error) {
      console.log(error);
    }
  };

  // ! handleForgot
  const handleForgot = async (formData) => {
    try {
      await axios.post(`${API}/account/forgot_password/`, formData);
      navigate("/forgotPassword");
    } catch (error) {
      console.log(error);
    }
  };

  // ! handleForgotConfirm
  const handleForgotConfirm = async (formData) => {
    console.log("handleForgotConfirm called with:", formData);
    try {
      await axios.post(`${API}/account/forgot_password_confirm/`, formData);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    handleSignUp,
    handleSignIn,
    currentUser,
    checkAuth,
    handleLogOut,
    handleChange,
    handleForgot,
    handleForgotConfirm,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
