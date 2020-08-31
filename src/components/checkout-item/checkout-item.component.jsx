import React from "react";
import { connect } from "react-redux";

import { deleteItemFromCart, addOneToCart, subtractOneToCart } from "../../redux/cart/cart.action";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, deleteItemFromCart, addOneToCart, subtractOneToCart }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractOneToCart(cartItem)}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addOneToCart(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item)),
  addOneToCart: (item) => dispatch(addOneToCart(item)),
  subtractOneToCart: (item) => dispatch(subtractOneToCart(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
