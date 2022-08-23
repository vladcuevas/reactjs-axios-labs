import React from 'react'
import "./Payment.css"
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../../../StateProvider'
import { Link, Routes, Route, Outlet } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

export default function Payment() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img 
          src="" 
          alt="" className="checkout__ad" 
        />
        <div>
          <h2 className='checkout__title'> Review your order </h2>
          <hr></hr>
          <h3 className='checkout__title'>Shipping Address</h3>
          <h3 className='checkout__title'>Payment Method</h3>
          <h3 className='checkout__title'>Add a gift card, promotion code, or voucher</h3>
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
        <Button>Place Your Order</Button>
        <Form>
            <Form.Group>
            <Form.Label>Order Summary</Form.Label>
            </Form.Group>

            <Form.Group><Form.Label>Items: 	USD 14.77</Form.Label></Form.Group>

            <Form.Group><Form.Label>Shipping & handling: 	USD 5.99</Form.Label></Form.Group>
            <Form.Group><Form.Label>Total before tax: 	USD 20.76</Form.Label></Form.Group>
            <Form.Group><Form.Label>Estimated tax to be collected: 	USD 1.45</Form.Label></Form.Group>
            <Form.Group><Form.Label>Order total: 	USD 22.21</Form.Label></Form.Group>
            <Form.Group><Form.Label>Payment Total:</Form.Label></Form.Group>
        </Form>
      </div> 
    </div>
  )
}
