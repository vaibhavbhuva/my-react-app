import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../redux/StateProvider';
import { getBasketTotal } from "../../redux/reducer";
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import api from '../../services/api';
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await api.post('/create-payment-intent', []);
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket, api]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then((paymentIntent) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      console.log('paymentIntent >>>> ', paymentIntent);
    })
  };

  const handleChange = (event) => {
    console.log('Payment change event >>>', event);
    setDisabled(!event.complete);
    setError(event.error ? event.error.message : null);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__heading">
            <h3>Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>A-234, Shiv nagar apartment, N/R Shivdhara Chowk</p>
            <p>Opp. Swastik soc, Mota varachha, Surat - 309929</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__heading">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                hideButton={true}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__heading">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              {error && <div className='payment__error'>{error}</div>}
              <div className="payment__price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                     <h3>Order total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} // Part of the homework
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={!stripe || !elements || processing || disabled || succeeded}>
                  <span>{ processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
