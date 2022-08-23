 import React from 'react'
import './CustomerInfo.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
  useParams,
} from "react-router-dom";

function CustomerInfo() {

  let { customerId } = useParams();

  return (
    <>
      <h1>Customers Information</h1>
        <Form>
          <Form.Label>Customer {customerId}</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Date of Birth" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="number" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="text" placeholder="Enter E-Mail" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
  )
}

export default CustomerInfo