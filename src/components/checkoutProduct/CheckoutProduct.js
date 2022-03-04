import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "../../redux/StateProvider";


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{basket}, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
        type: 'CLEAR_ITEM_FROM_CART',
        id: id,
    })
}
  
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__img' alt='' src={image} />
        <div className='checkoutProduct__info'>
              <p className='checkoutProduct__title'>{title}</p>
              <p className='checkoutProduct__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='checkoutProduct__quantity'>
                <span class="minus">-</span>
                <input type="text" value="1" readonly />
                <span class="plus">+</span>
              </div>
              {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
        </div>
    </div>
  )
}

export default CheckoutProduct
