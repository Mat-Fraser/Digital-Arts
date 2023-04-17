import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);


  return (
    <div>Payment successful.
      !! DO NOT CLOSE THE PAGE !! 
    </div>
  );
};

export default Success;