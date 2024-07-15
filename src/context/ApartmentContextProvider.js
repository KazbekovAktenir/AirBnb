import React, { useContext, useReducer } from "react";

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
        return { ...state, categories: action.payload };
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };

  const getCategories = async () => {
    const { data } = await axios(`${API}/category/list/`, getConfig());
    dispatch({
      type: "GET_CATEGORIES",
      payload: data.results,
    });
  };

  const values = {};
  return (
    <apartmentContext.Provider value={values}>
      {children}
    </apartmentContext.Provider>
  );
};

export default ApartmentContextProvider;
