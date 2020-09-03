import ShopActionTypes from "./shop.types";

export const initialCollections = (collections) => ({
  type: ShopActionTypes.INITIAL_COLLECTIONS,
  payload: collections,
});