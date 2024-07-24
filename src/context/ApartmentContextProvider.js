import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apartmentContext = createContext();
export const useApartment = () => useContext(apartmentContext);

const ApartmentContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const INIT_STATE = {
    categories: [],
    apartments: [],
    oneApartment: null,
    pages: 10,
    // comments: [],
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
      case "GET_APARTMENTS":
        return { ...state, apartments: action.payload };
      case "GET_ONE_APARTMENT":
        return { ...state, oneApartment: action.payload };
      // case "GET_COMMENTS":
      //   return { ...state, comments: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access.access}`;
    return {
      headers: { Authorization },
    };
  };

  const refreshToken = async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    try {
      const response = await axios.post(`${API}/auth/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem("tokens", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios(`${API}/apartment/category/`, getConfig());
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addApartment = async (apartment) => {
    try {
      await axios.post(`${API}/apartment/`, apartment, getConfig());
      navigate("/apartmentList");
    } catch (error) {
      console.log(error);
    }
  };

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

  const deleteApartment = async (id) => {
    try {
      await axios.delete(`${API}/apartment/${id}/`, getConfig());
      getApartments();
    } catch (error) {
      console.log(error);
    }
  };

  const editApartment = async (id, editedApartment) => {
    try {
      await axios.patch(
        `${API}/apartment/${id}/`,
        editedApartment,
        getConfig()
      );
      await getApartments();
      navigate("/apartmentList");
    } catch (error) {
      console.log(error);
    }
  };

  const getOneApartment = async (id) => {
    try {
      const { data } = await axios.get(`${API}/apartment/${id}/`, getConfig());
      dispatch({
        type: "GET_ONE_APARTMENT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const addComment = async (commentData) => {
  //   try {
  //     await axios.post(`${API}/apartment/comments/`, commentData, getConfig());
  //     await getComments(commentData.apartment); // Fetch updated comments
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getComments = async (apartmentId) => {
  //   try {
  //     const { data } = await axios(
  //       `${API}/apartment/comments/${apartmentId}/`,
  //       getConfig()
  //     );
  //     dispatch({ type: "GET_COMMENTS", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const values = {
    categories: state.categories,
    getCategories,
    addApartment,
    getApartments,
    apartments: state.apartments,
    oneApartment: state.oneApartment,
    deleteApartment,
    pages: state.pages,
    editApartment,
    getOneApartment,
    refreshToken,
    // addComment,
    // getComments,
    // comments: state.comments,
  };

  return (
    <apartmentContext.Provider value={values}>
      {children}
    </apartmentContext.Provider>
  );
};

export default ApartmentContextProvider;
