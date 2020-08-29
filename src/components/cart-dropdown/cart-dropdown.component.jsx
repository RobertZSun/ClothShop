import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.style.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
