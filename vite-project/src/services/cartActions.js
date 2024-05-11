// cartActions.js
// export const loadCartFromStorage = () => {
//   // Coba parsing item keranjang dari localStorage (atau kembalikan array kosong)
//   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   return {
//     type: "LOAD_CART_FROM_STORAGE",
//     payload: cartItems,
//   };
// };

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: { ...product, quantity: 1 }, // Default quantity is 1
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: productId,
  };
};

export const removeIfZeroQuantity = (productId) => {
  return {
    type: "REMOVE_IF_ZERO_QUANTITY",
    payload: productId,
  };
};