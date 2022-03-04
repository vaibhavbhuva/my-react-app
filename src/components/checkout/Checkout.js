import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from "../../redux/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const emptyBasketItems = () => {
    dispatch({
      type: 'EMPTY_BASKET'
    })
  }

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <h2 className='checkout__title'>
              Your Shopping Basket ({basket.length})
              <a href='#' onClick={emptyBasketItems} > Clear Basket</a>
            </h2>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          ))}
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout