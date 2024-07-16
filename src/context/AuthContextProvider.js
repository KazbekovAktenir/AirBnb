import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  //!sign-up
  const handleSignUp = async (formData) => {
    try {
      console.log(formData); // Логирование данных формы
      const response = await axios.post(`${API}/account/sign-up/`, formData);
      console.log("Регистрация успешна:", response.data);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      console.error(
        "Ошибка при регистрации:",
        error.response ? error.response.data : error.message
      );
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
      console.error(
        "Ошибка при входе:",
        error.response ? error.response.data : error.message
      );
    }
  };
  //! checkAuth
  const checkAuth = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const { data } = await axios.post(`${API}/account/refresh/`, {
        refresh: tokens.refresh,
      });
      console.log(data);
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: data, refresh: tokens.refresh })
      );
      const email = JSON.parse(localStorage.getItem("email"));
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
      console.error(
        "Ошибка при проверке авторизации:",
        error.response ? error.response.data : error.message
      );
    }
  };

  //!logout
  const handleLogOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/sign-in");
  };

  const values = {
    handleSignUp,
    handleSignIn,
    currentUser,
    checkAuth,
    handleLogOut,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
