import React, { useEffect } from "react";
import "./Cart.css";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { cart, chaingeApartmentCart, deleteApartmentFromCart, getCart } =
    useCart();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="Header">
            <h1>Корзина</h1>
            <div className="house">
              <p>Недвижимость</p>
              <p>количество</p>
              <p>стоимость</p>
              <p>Общая сумма</p>
            </div>
          </div>
          <div className="body">
            {cart.apartments.map((elem) => (
              <div>
                <p>{elem.item.title}</p>
                <p>{elem.item.category}</p>
                <p>{elem.item.price}</p>
                <div>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={elem.count}
                    onChange={(e) =>
                      chaingeApartmentCart(elem.item.id, e.target.value)
                    }
                  />
                </div>
                <p>{elem.subPrice}</p>
                <button onClick={() => deleteApartmentFromCart(elem.item.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button>Buy now {cart.totalPrice}</button>
    </div>
  );
};

export default Cart;
