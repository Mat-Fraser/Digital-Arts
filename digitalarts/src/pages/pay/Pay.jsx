import React from 'react'
import './Pay.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import newRequest from '../../utils/newRequest';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe(
    "pk_test_51MnewgSFOQNjHXpNYMiiKEVxpSmjHyBs1Z9dSuU6jU5v52vaP5SioSekBchmhG7EKzwzspLsmGgzWhCeNlFJCdw000hepbAQ5N"
  );

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    
   const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await newRequest.post(
              `/orders/create-payment-intent/${id}`
            );
            setClientSecret(res.data.clientSecret);
          } catch (err) {
            console.log(err);
          }
        };
        makeRequest();
      }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return <div className="pay">
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>;
};

export default Pay