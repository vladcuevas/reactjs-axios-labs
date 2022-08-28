import React, { useState, useRef, useEffect } from 'react'
import './UpdateProduct.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

import {
  useParams,
} from "react-router-dom"

import useFetchData from '../../hooks/use-fetch-data'
import PutFetchData from '../../hooks/put-fetch-data'

function UpdateProduct() {
  const [enteredName, setName] = useState('')
  const [enteredCompanyName, setCompanyName] = useState('')
  const [enteredPrice, setPrice] = useState('')
  const [enteredDiscount, setDiscount] = useState('')
  const [enteredQuantity, setQuantity] = useState('')
  const [enteredUses, setUses] = useState('')
  const [enteredDisease, setDisease] = useState('')
  let [enteredExpirationDate, setExpirationDate] = useState('')
  let [imageFile, setImageFile] = useState('')
  let [prevProductId, setPrevProductId] = useState('')

  const inputRef = useRef(null);

  // Start Handlers
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

  const diseaseChangeHandler = (e) => {
    data['disease'] = e.target.value
    setDisease(e.target.value)
  }

  const expirationDateChangeHandler = (e) => {
    data['expirationDate'] = e.target.value
    setExpirationDate(e.target.value)
  }

  function handleImageChange(e) {
    if (e.target.files.length) {
      imageFile = e.target.value
      data.image = URL.createObjectURL(e.target.files[0])
      setImageFile(URL.createObjectURL(e.target.files[0]))
    }
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    //reset the values of input fields
    setName('');
    setCompanyName('');

    let data_raw = {
      "name":enteredName !== '' ? enteredName : data.name,
      "companyName": enteredCompanyName !== '' ? enteredCompanyName : data.companyName, 
      "price": enteredPrice !== '' ? enteredPrice : data.price, 
      "uses": enteredUses !== '' ? enteredUses : data.uses, 
      "expirationDate": enteredExpirationDate !== '' ? enteredExpirationDate : data.expirationDate, 
      "discount": enteredDiscount !== '' ? enteredDiscount : data.discount, 
      "quantity": enteredQuantity !== '' ? enteredQuantity : data.quantity, 
      "disease": enteredDisease !== '' ? enteredDisease : data.disease, 
    }

    const putData = new PutFetchData()

    let response = putData.fetchData(url, data_raw)

    console.log(response)

    alert('Updated')

    return response

    // return alert('Entered Values are: ' + enteredName + ',' + enteredCompanyName)

  };
  // End Handlers

  let { productId } = useParams();

  let url = 'http://localhost:8080/api/admin/medicines/' + productId

  const {
    data, loading
  } = useFetchData(url)

  const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  }


  // Used to reset the FileInput when a different product 
  // is clicked
  useEffect(() => {
    // Runs after the first render() lifecycle
    if (!inputRef.current) {
      setPrevProductId(productId)
    } else {
      if (productId !== prevProductId)
      {
        resetFileInput()
      }
    }
  }, [productId, prevProductId]);

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className='div_form_container'>
          <h1>Update Medicine</h1>
          <Form onSubmit={SubmitHandler}>
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

            <Form.Group className="mb-3" controlId="formBasicDisease">
              <Form.Label>Diseasee</Form.Label>
              <Form.Control type="text" value={data.disease} onChange={diseaseChangeHandler} placeholder="Enter Disease" />
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
                <Form.Control ref={inputRef} type="file" onChange={handleImageChange}/>
              </Form.Group>
              {imageFile === data.image ? (
                <Image className='Image' src={imageFile} thumbnail />
              ) : (
                <>
                  <Image className='Image' src={data.image} thumbnail />
                </>
              )}
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