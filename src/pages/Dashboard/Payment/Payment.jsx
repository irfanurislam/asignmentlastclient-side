import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart, setCarts] = useState([]);
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    fetch(`https://side-of-server.vercel.app/carts/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCarts(data)
    })
  }, []);

  return (
    <div>
      <h2>My Payment</h2>

      <div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={cart.classImage}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{cart.className}</h2>
            <p>$ {cart.price}</p>
            <p>Seats: {cart.seats}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
