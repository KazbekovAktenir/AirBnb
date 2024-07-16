import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import axios from "axios";

const apartmentContext = createContext();
export const useApartment = () => useContext(apartmentContext);

const ApartmentContextProvider = ({ children }) => {
  const INIT_STATE = {
    categories: [],
    apartments: [],
    pages: 10,
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CATEGORIES":
        console.log("Редьюсер получил категории:", action.payload);
        return { ...state, categories: action.payload };
      case "GET_APARTMENTS":
        return { ...state, apartments: action.payload };
      case "GET_ONE_APARTMENT":
        return { ...state, oneApartment: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    console.log("Токены из localStorage:", tokens);
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    console.log("Конфигурация запроса:", config);
    return config;
  };

  const refreshToken = async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    try {
      const response = await axios.post(`${API}/auth/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem("tokens", JSON.stringify(response.data));
    } catch (error) {
      console.error(
        "Ошибка при обновлении токена:",
        error.response ? error.response.data : error.message
      );
      // Если обновление не удалось, нужно обработать это (например, перенаправить на страницу логина)
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios(`${API}/apartment/category/`, getConfig());
      console.log("Полученные данные категорий:", data);
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
        // payload: data.results,
      });
    } catch (error) {
      console.error(
        "Ошибка при получении категорий:",
        error.response ? error.response.data : error.message
      );
    }
  };
  //! add
  const addApartment = async (apartment) => {
    try {
      await axios.post(`${API}/apartment/`, apartment, getConfig());
    } catch (error) {
      console.log(error);
    }
  };

  //! get
  const getApartments = async () => {
    const { data } = await axios(
      `${API}/apartment/${window.location.search}`,
      getConfig()
    );
    dispatch({
      type: "GET_APARTMENTS",
      payload: data.results,
    });
  };
  //! delete
  const deleteApartment = async (id) => {
    try {
      await axios.delete(`${API}/apartment/${id}/`, getConfig());
      getApartments();
    } catch (error) {
      console.log(error);
    }
  };

  // edit
  const editApartment = async (id, updatedApartment) => {
    try {
      await axios.patch(
        `${API}/apartment/${id}/`,
        updatedApartment,
        getConfig()
      );
      getApartments(); // Обновляем список после редактирования
    } catch (error) {
      console.error("Ошибка при редактировании квартиры:", error);
    }
  };

  // Получение информации о одной квартире
  const getOneApartment = async (id) => {
    try {
      const { data } = await axios.get(`${API}/apartment/${id}`, getConfig());
      dispatch({
        type: "GET_ONE_APARTMENT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    categories: state.categories,
    getCategories,
    addApartment,
    getApartments,
    apartments: state.apartments,
    deleteApartment,
    pages: state.pages,
    getOneApartment,
    editApartment,
  };
  return (
    <apartmentContext.Provider value={values}>
      {children}
    </apartmentContext.Provider>
  );
};

export default ApartmentContextProvider;
