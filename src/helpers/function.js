export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};

export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};

export const calcTotalPrice = (apartments) => {
  const totalPrice = apartments.reduce((acc, curr) => {
    if (curr.subPrice === 0) {
      return acc + curr.item.price;
    } else {
      return acc + curr.subPrice;
    }
  }, 0);
  return totalPrice;
};

export const getApartmentsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.apartments : 0;
};
