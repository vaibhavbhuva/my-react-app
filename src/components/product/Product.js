import React, { Component } from 'react'
import './Product.css'
export default class Product extends Component {
  
  // eslint-disable-next-line
  constructor(props) {
      super(props)
  }
    
  render() {
    return (
      <div className='product'>
          <div className='product__info'>
            <p>{this.props.title}</p>
            <p>
                <small>$</small>
                <strong>{this.props.price}</strong>
            </p>
            <div className='product__rating'>
                {Array(this.props.rating).fill().map((_,i) => ( '★ ' ))}
            </div>
          </div>
          <img alt='' className='product__img' src={this.props.image} />
          <button className='product__addToCart'>Add to Cart</button>
      </div>
    )
  }
}
