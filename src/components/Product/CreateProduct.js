import React, { useState } from 'react'
import './CreateProduct.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

import UpdateData from '../../hooks/update-fetch-data'

function CreateProduct() {
  const [file, setFile] = useState('');

  // Const for the medicine

  const [enteredName, setName] = useState('')
  const [enteredCompanyName, setCompanyName] = useState('')
  const [enteredPrice, setPrice] = useState('')
  const [enteredDiscount, setDiscount] = useState('')
  const [enteredQuantity, setQuantity] = useState('')
  const [enteredUses, setUses] = useState('')
  const [enteredDisease, setDisease] = useState('')
  let [enteredExpirationDate, setExpirationDate] = useState('')

  // End Const for the medicine

  
  
  // Start Handlers
  async function handleChange(e) {
    let url = e.target.value
    const response = await fetch(url)
    if (response.ok) {
      setFile(url)
    }
    else {
      setFile('')
    }
  }

  // Start Handlers
  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const companyNameHandler = (e) => {
    setCompanyName(e.target.value);
  }

  const priceHandler = (e) => {
    setPrice(e.target.value)
  }

  const discountHandler = (e) => {
    setDiscount(e.target.value)
  }

  const quantityHandler = (e) => {
    setQuantity(e.target.value)
  }

  const usesHandler = (e) => {
    setUses(e.target.value)
  }

  const diseaseHandler = (e) => {
    setDisease(e.target.value)
  }

  const expirationDateHandler = (e) => {
    setExpirationDate(e.target.value)
  }  

  const SubmitHandler = (e) => {
    e.preventDefault();

    //reset the values of input fields is not required for POST
    // setName('')
    // setCompanyName('')
    // setPrice('')
    // setUses('')
    // setExpirationDate('')
    // setDiscount('')
    // setDisease('')
    // setQuantity('')

    let data_raw = {
      "name": enteredName,
      "companyName": enteredCompanyName,
      "quantity": enteredQuantity,
      "uses": enteredUses,
      "price": enteredPrice,
      "discount": enteredDiscount,
      "rating": 0,
      "disease": enteredDisease,
      "image": "",
      "expirationDate": enteredExpirationDate,
    }

    console.log(data_raw)

    const postData = new UpdateData()

    const url = 'http://127.0.0.1:8080/api/admin/medicines'

    let response = postData.fetchData(url, 'POST', data_raw)

    // In case of put, the result from the API is the 
    // response
    response.then((successMessage) => {
      alert(`Medicine! ${successMessage.headers.location} was created`)
    }).catch((reason) => {
      if (reason.cause) {
        console.error("Had previously handled error");
      } else {
        console.error(`Trouble with promiseGetWord(): ${reason}`);
      }
    })

    // End Put the data
    return response
  }

  // End Handlers

  return (
    <>
      <h1>Add Medicine</h1>
      <Form onSubmit={SubmitHandler}>
        <Form.Group className="mb-3" controlId="forTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={nameHandler} placeholder="Enter medicine title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" onChange={companyNameHandler} placeholder="Enter Company Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDisease">
          <Form.Label>Disease</Form.Label>
          <Form.Control type="text" onChange={diseaseHandler} placeholder="Disease" />
        </Form.Group>        

        <Form.Group className="mb-3" controlId="forPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" onChange={priceHandler} placeholder="Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" onChange={quantityHandler} placeholder="Quantity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forUses">
          <Form.Label>Uses</Form.Label>
          <Form.Control type="number" onChange={usesHandler} placeholder="Uses" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDiscount">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="number" onChange={discountHandler} placeholder="Discount" />
        </Form.Group>

        <Form.Group controlId="expirationDate">
          <Form.Label>Expiration Date</Form.Label>
          <Form.Control type="date" onChange={expirationDateHandler} name="expirationDate" placeholder="Expiration Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId='forRating'>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            aria-label="Default rating"
            disabled
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formImageURL" className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" onChange={handleChange} />
          </Form.Group>
          <Image className='Image' src={file} thumbnail />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateProduct