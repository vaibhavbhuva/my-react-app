import React from 'react'
import './Product.css'
import { useStateValue } from "../../redux/StateProvider";

function Product({id, title, price, rating, image}) {
  const [ {basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  
  return (
    <div className='product'>
        <div className='product__info'>
          <p>{title}</p>
          <p>
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className='product__rating'>
              {Array(rating).fill().map((_,i) => ( '★ ' ))}
          </div>
        </div>
        <img alt='' className='product__img' src={image} />
        <button onClick={addToBasket} className='product__addToCart'>Add to Cart</button>
    </div>
  )
}

export default Product;
