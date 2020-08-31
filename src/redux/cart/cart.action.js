import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const addOneToCart = (item) => ({
  type: CartActionTypes.ADD_ONE_TO_CART,
  payload: item,
});

export const subtractOneToCart = (item) => ({
  type: CartActionTypes.SUBSTRACT_ONE_TO_CART,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item,
});


