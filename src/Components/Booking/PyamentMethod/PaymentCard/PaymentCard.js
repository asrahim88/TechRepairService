import React, { useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentCard = ({handlePayment}) => {
    const [paymentError, setPaymentError] = useState();
    const [paymentSuccess, setPaymentSuccess] = useState();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null);
            console.log('[error]', error);
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null);
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
        }
        
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p className = "text-danger">{paymentError}</p>
            }
            {
                paymentSuccess && <p className = "text-success">Thanks For Payment. Your Payment Is Successfully</p>
            }
        </div>
    );
};

export default PaymentCard;