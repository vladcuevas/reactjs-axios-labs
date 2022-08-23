import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct"
import Subtotal from './Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Checkout() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img 
          src="" 
          alt="" className="checkout__ad" 
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct 
              id = {item.id}
              title = {item.tile}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}              
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div> 
    </div>
  )
}
