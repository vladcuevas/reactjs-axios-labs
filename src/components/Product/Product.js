import React from 'react'
import './Product.css'

import { useStateValue } from "../../StateProvider";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Product({ id, name, image, price, rating }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id, 
        name: name,
        image: image, 
        price: price, 
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p key={name}>{name}</p>
        <p key={price} className='product__price'>
          <small>$</small>
          <strong>{price}</strong></p>
        <div className="product__rating">
          {
            Array(rating).fill().map((_, i) => (
              <p key={i}><span role="img" aria-label="start">⭐</span></p>
            ))
          }</div>
      </div>
      <img src={image} alt="product-images" />
      <Button onClick={addToBasket} >Add to Basket</Button>
    </div>
  )
}

export default Product