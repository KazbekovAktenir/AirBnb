import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import ApartmentContextProvider from "./context/ApartmentContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApartmentContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <CommentContextProvider>
            <App />
          </CommentContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </ApartmentContextProvider>
  </BrowserRouter>
);
