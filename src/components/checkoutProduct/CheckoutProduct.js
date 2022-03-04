import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "../../redux/StateProvider";

function CheckoutProduct(product) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
        type: 'CLEAR_ITEM_FROM_CART',
        id: product.id,
    })
  }

  const removeItemQuantity = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: product,
    });
  }

  const addItemQuantity = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: product,
    });
  }

  const handleChange = (event) => {
    // if(event.target.value === 0) { return true; }
    // if(event.target.value > 10) { return alert("Quantity should be less than 10") }
    // for (let index = 0; index < event.target.value; index++) {
      // addItemQuantity();
    // }
  }
  
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__img' alt='' src={product.image} />
        <div className='checkoutProduct__info'>
              <p className='checkoutProduct__title'>{product.title}</p>
              <p className='checkoutProduct__price'>
                  <small>$</small>
                  <strong>{product.price}</strong>
              </p>
              <div className='checkoutProduct__quantity'>
                <span onClick={removeItemQuantity} className="minus">-</span>
                <input type="text" onChange={handleChange} value={product.quantity} />
                <span onClick={addItemQuantity} className="plus">+</span>
              </div>
              {!product?.hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
        </div>
    </div>
  )
}

export default CheckoutProduct
