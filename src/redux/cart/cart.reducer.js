import CartActionTypes from "./cart.types";
import { addItemToCart, deleteItemFromCart, minusOneItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.ADD_ONE_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.SUBSTRACT_ONE_TO_CART:
      return {
        ...state,
        cartItems: minusOneItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
