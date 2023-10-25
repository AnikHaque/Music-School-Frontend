import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet';
import CheckOut from '../../Components/CheckOut';
import UseCarts from '../../Hook/UseCarts';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = UseCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full px-10'> 
            <Helmet>
                <title>SummerCamp || Payment</title>
            </Helmet>
            <h3 className='text-3xl text-[#6a9955] font-semibold py-5'>Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={total}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;