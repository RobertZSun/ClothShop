import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HMSJgAsipgduxKVbC8KRw82ZLPht9H3TFS8yj1GDmuKm2jIyArs4zZ6uwweFnKuyUvwywv7M6jUte7esYR8faXU00duO58QUb";

  let onToken = (token) => {
    console.log(token);
    alert("Payment Charged Success")
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://img.icons8.com/bubbles/2x/card-in-use.png"
      descriptions={`Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
