import React, { createContext, useContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getApartmentsCountInCart,
  getLocalStorage,
} from "../helpers/function";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLenght: getApartmentsCountInCart(),
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CART":
        return { ...state, cart: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   ! CREAT
  const addApartmentToCart = (apartment) => {
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        apartments: [],
        totalPrice: 0,
      };
    }

    let newApartment = {
      item: apartment,
      count: 1,
      subPrice: 0,
    };

    let apartmentToFind = cart.apartments.filter(
      (elem) => elem.item.id === apartment.id
    );

    if (apartmentToFind.length === 0) {
      cart.apartments.push(newApartment);
    } else {
      cart.apartments = cart.apartments.filter(
        (elem) => elem.item.id !== apartment.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.apartments);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  //   ! GET
  const getCart = () => {
    let cart = getLocalStorage();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ apartments: [], totalPrice: 0 })
      );
      cart = {
        apartments: [],
        totalPrice: 0,
      };
      dispatch({
        type: "GET_CART",
        payload: cart,
      });
    }
  };

  const checkApartmentInCart = (id) => {
    let cart = getLocalStorage();
    if (cart) {
      let newCart = cart.apartments.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const chaingeApartmentCart = (id, value) => {
    let cart = getLocalStorage();
    cart.apartments = cart.apartments.map((elem) => {
      if (elem.item.id == id) {
        elem.count = value;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });

    cart.totalPrice = calcTotalPrice(cart.apartments);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  //   !DELETE
  const deleteApartmentFromCart = (id) => {
    let cart = getLocalStorage();
    cart.apartments = cart.apartments.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.apartments);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  const values = {
    cart: state.cart,
    addApartmentToCart,
    checkApartmentInCart,
    chaingeApartmentCart,
    deleteApartmentFromCart,
    getCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
