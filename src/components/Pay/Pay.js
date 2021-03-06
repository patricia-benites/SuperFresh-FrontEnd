import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";

export function Pay({ inputAmount }) {
  console.log(inputAmount * 100);
  const navigate = useNavigate();
  const REACT_APP_STRIPE_KEY =
    "pk_test_51KvQcwDksHGMxDrYrUT8M6tYkjFfZaDWjNdnafIKCjrCAVU5o9uRhoBan7kQBlllvLTuIB2yuCjJ4t1EAmmvY0uI00PkQ7pjZw";
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await client.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: inputAmount * 100,
        });
        navigate("/checkout");
      } catch (error) {}
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      <StripeCheckout
        name="SuperFresh"
        amount={inputAmount * 100}
        token={onToken}
        stripeKey={REACT_APP_STRIPE_KEY}
      />
    </div>
  );
}
