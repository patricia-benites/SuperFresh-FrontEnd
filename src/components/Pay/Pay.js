import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { client } from "../../client";
import {useNavigate} from 'react-router-dom';

export function Pay() {
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
        const response = await client.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        navigate("/checkout");
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      <StripeCheckout
        name="SuperFresh"
        amount={2000}
        token={onToken}
        stripeKey={REACT_APP_STRIPE_KEY}
      />
    </div>
  );
}
