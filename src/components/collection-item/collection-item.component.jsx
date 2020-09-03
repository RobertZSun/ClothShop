import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.action";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItemToCart }) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <CustomButton inverted={true} onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
