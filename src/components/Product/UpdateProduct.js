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
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let { productId } = useParams();

  let url = 'http://localhost:8080/api/admin/medicines/' + productId

  const {
    data, loading
  } = useFetchData(url)

  const productDate = useMemo(() => {
    try {
      let date = new Date(data.expirationDate)
      return date.toISOString().split('T')[0]
    } catch (error) {
      console.error(error)
    }
  }, [data])

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className='div_form_container'>
          <h1>Update Medicine</h1>
          <Form>
            <Form.Label>Medicine ID: {productId}</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={data.name} placeholder="Enter medicine title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" value={data.companyName} placeholder="Enter Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value={data.price} placeholder="Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDiscount">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" value={data.discount} placeholder="Discount" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" value={data.quantity} placeholder="Quantity" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUses">
              <Form.Label>Uses</Form.Label>
              <Form.Control type="number" value={data.uses} placeholder="Uses" />
            </Form.Group>

            <Form.Group controlId="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" value={productDate} name="expirationDate" />
            </Form.Group>

            <Form.Group class="mb-3" controlId='formBasicRating'>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default UpdateProduct