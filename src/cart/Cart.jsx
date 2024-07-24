import React, { useEffect } from "react";
import "./Cart.css";
import { useCart } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, chaingeApartmentCart, deleteApartmentFromCart, getCart } =
    useCart();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div className="small-container card-page">
        <table>
          <tr>
            <th>Apartment</th>
            <th>Quantity</th>
            <th>SubPrice</th>
          </tr>
          {cart.apartments.map((elem) => (
            <tr key={elem.item.id}>
              <td>
                <div className="cart-info">
                  <img src="" alt="" />
                  <div>
                    <p>{elem.item.title}</p>
                    <small>Price: {elem.item.price}</small>
                    <br />
                    <button
                      onClick={() => deleteApartmentFromCart(elem.item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  defaultValue={elem.count}
                  onChange={(e) =>
                    chaingeApartmentCart(elem.item.id, e.target.value)
                  }
                />
              </td>
              <td>{elem.item.price}</td>
            </tr>
          ))}
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>{cart.totalPrice}</td>
            </tr>
          </table>
        </div>
        <div className="total">
          <Link to={"/buy"}>
            <button className="btn-Buy">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
