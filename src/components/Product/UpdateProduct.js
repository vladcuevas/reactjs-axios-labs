import React, { useState } from 'react'
import './UpdateProduct.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

import {
  useParams,
} from "react-router-dom";

function UpdateProduct() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let { productId } = useParams();

  return (
    <>
      <h1>Update Medicine</h1>
      <Form>
        <Form.Label>Medicine {productId}</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter medicine title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Company Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDiscount">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="number" placeholder="Discount" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUses">
          <Form.Label>Uses</Form.Label>
          <Form.Control type="number" placeholder="Uses" />
        </Form.Group>

        <Form.Group controlId="expirationDate">
          <Form.Label>Expiration Date</Form.Label>
          <Form.Control type="date" name="expirationDate" placeholder="Expiration Date" />
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
          <Image className='Image' src={file} thumbnail />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateProduct