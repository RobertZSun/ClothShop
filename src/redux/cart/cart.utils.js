export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const deleteItemFromCart = (cartItems, cartItemToDel) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDel.id);
};

export const minusOneItemToCart = (cartItems, cartItemToSubtractOne) => {
  if (cartItemToSubtractOne.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToSubtractOne.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToSubtractOne.id
    );
  }
};
