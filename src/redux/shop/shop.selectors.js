import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItem = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItem],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItem],
    (collections) => (collections ? collections[collectionUrlParam] : null)
  );
