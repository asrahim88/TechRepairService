import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard/PaymentCard';

const stripePromise = loadStripe('pk_test_51If5AdAfQ3NczNQ0g0bA9ATdRy93ONeVJqwulGcYzJWZkJyDk0kHqZF7M84s1DSCTDOWTRcKDfsaEN1ZV3PzWVBo0028Km33px');

const PaymentMethod = ({handlePayment}) => {
    return (
        <div>
            <h1>PaymentMethod</h1>
            <Elements stripe={stripePromise}>
                <PaymentCard handlePayment = {handlePayment}></PaymentCard>
            </Elements>
        </div>
    );
};

export default PaymentMethod;