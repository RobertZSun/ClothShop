import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalMoney,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, totalMoney }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Desciption</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
    ))}

    <div className="total">
      <span>TOTAL: ${totalMoney}</span>
    </div>
    <div className="test-warning">
      ***  for testing use this card info for payment *** <br />
       4242 4242 4242 4242
       Exp: 11/20 CVV: 123
    </div>
    <StripeCheckoutButton price={totalMoney} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalMoney: selectCartTotalMoney,
});

export default connect(mapStateToProps)(CheckoutPage);
