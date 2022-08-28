import React, { useState, useMemo } from 'react'
import './UpdateProduct.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

import {
  useParams,
} from "react-router-dom"

import useFetchData from '../../hooks/use-fetch-data'

function UpdateProduct() {
  const [file, setFile] = useState();

  const [enteredName, setName] = useState('')
  const [enteredCompanyName, setCompanyName] = useState('')
  const [enteredPrice, setPrice] = useState('')
  const [enteredDiscount, setDiscount] = useState('')
  const [enteredQuantity, setQuantity] = useState('')
  const [enteredUses, setUses] = useState('')
  let [enteredExpirationDate, setExpirationDate] = useState(new Date())

  const nameChangeHandler = (e) => {
    data['name'] = e.target.value
    setName(e.target.value)
  }

  const companyNameChangeHandler = (e) => {
    data['companyName'] = e.target.value
    setCompanyName(e.target.value);
  }

  const priceChangeHandler = (e) => {
    data['price'] = e.target.value
    setPrice(e.target.value)
  }

  const discountChangeHandler = (e) => {
    data['discount'] = e.target.value
    setDiscount(e.target.value)
  }

  const quantityChangeHandler = (e) => {
    data['quantity'] = e.target.value
    setQuantity(e.target.value)
  }

  const usesChangeHandler = (e) => {
    data['uses'] = e.target.value
    setUses(e.target.value)
  }

  const expirationDateChangeHandler = (e) => {
    data['expirationDate'] = e.target.value
    setExpirationDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    //reset the values of input fields
    setName('');
    setCompanyName('');

    return alert('Entered Values are: ' + enteredName + ',' + enteredCompanyName)

  };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let { productId } = useParams();

  let url = 'http://localhost:8080/api/admin/medicines/' + productId

  const {
    data, loading
  } = useFetchData(url)

  // let productDate = useMemo(() => {
  //   try {
  //     console.log("triggered useMemo")
  //     let date = new Date(data.expirationDate)
  //     return date.toISOString().split('T')[0]
  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }, [data])

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className='div_form_container'>
          <h1>Update Medicine</h1>
          <Form onSubmit={submitHandler}>
            <Form.Label>Medicine ID: {productId}</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={data.name} onChange={(e) => nameChangeHandler(e)} placeholder="Enter medicine title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" value={data.companyName} onChange={companyNameChangeHandler} placeholder="Enter Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value={data.price} onChange={priceChangeHandler} placeholder="Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDiscount">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" value={data.discount} onChange={discountChangeHandler} placeholder="Discount" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" value={data.quantity} onChange={quantityChangeHandler} placeholder="Quantity" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUses">
              <Form.Label>Uses</Form.Label>
              <Form.Control type="number" value={data.uses} onChange={usesChangeHandler} placeholder="Uses" />
            </Form.Group>

            <Form.Group controlId="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="date" value={data.expirationDate}
                onChange={(e) => expirationDateChangeHandler(e)}
                name="expirationDate"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId='formBasicRating'>
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
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
              <Image className='Image' src={data.image} thumbnail />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default UpdateProduct