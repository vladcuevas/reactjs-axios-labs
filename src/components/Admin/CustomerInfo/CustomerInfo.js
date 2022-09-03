import React, { useState, useRef, useEffect } from 'react'
import './CustomerInfo.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useFetchData from '../../../hooks/use-fetch-data'
import PutFetchData from '../../../hooks/put-fetch-data'

import {
  useParams
} from "react-router-dom"

function CustomerInfo() {

  let { customerId } = useParams();

  // Handlers
  const [enteredName, setName] = useState('')
  const [enteredLastName, setLastName] = useState('')
  const [enteredDob, setDob] = useState('')
  const [enteredGender, setGender] = useState('')
  const [enteredAddress, setAddress] = useState('')
  const [enteredPhoneNo, setPhoneNo] = useState('')
  const [enteredEmail, setEmail] = useState('')
  // End Handlers

  // Fetch the data
  let url = 'http://localhost:8080/api/user/' + customerId

  const {
    data, loading
  } = useFetchData(url)
  // End Fetch the data

  // Start Handlers

  const nameHandler = (e) => {
    data['firstName'] = e.target.value
    setName(e.target.value)
  }

  const lastNameHandler = (e) => {
    data['lastName'] = e.target.value
    setLastName(e.target.value)
  }
  const dobHandler = (e) => {
    data['dob'] = e.target.value
    setDob(e.target.value)
  }
  const addressHandler = (e) => {
    data['address'] = e.target.value
    setAddress(e.target.value)
  }
  const phoneNoHandler = (e) => {
    data['phoneNumber'] = e.target.value
    setPhoneNo(e.target.value)
  }
  const emailHandler = (e) => {
    data['email'] = e.target.value
    setEmail(e.target.value)
  }

  const genderHandler = (e) => {
    data['gender'] = e.target.value
    setGender(e.target.value)
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    //reset the values of input fields
    setName('')
    setLastName('')
    setDob('')
    setAddress('')
    setPhoneNo('')
    setEmail('')
    setGender('')

    let data_raw = {
      "firstName": enteredName !== '' ? enteredName : data.firstName,
      "lastName": enteredLastName !== '' ? enteredLastName : data.lastName,
      "userName": data.userName,
      "active": data.active,
      "email": enteredEmail !== '' ? enteredEmail : data.email,
      "gender" : enteredGender !== '' ? enteredGender  : data.gender,
      "address": enteredAddress !== '' ? enteredAddress : data.address,
      "phoneNumber": enteredPhoneNo !== '' ? enteredPhoneNo : data.phoneNumber,
      "dob": enteredDob !== '' ? enteredDob : data.dob,
      "password" : data.password,
      "roles" : data.roles
    }

    console.log(data_raw)

    const putData = new PutFetchData()

    let response = putData.fetchData(url, data_raw)

    console.log(response)

    alert('Updated')

    return response

  }
  // End Handlers

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h1>Customers Information</h1>
          <Form onSubmit={SubmitHandler}>

            <Form.Label>Customer {customerId}</Form.Label>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={data.firstName} onChange={nameHandler} placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={data.lastName} onChange={lastNameHandler} placeholder="Enter last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" value={data.dob} onChange={dobHandler} placeholder="Date of Birth" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" value={data.gender} onChange={genderHandler} placeholder="Gender" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={data.address} onChange={addressHandler} placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" value={data.phoneNumber} onChange={phoneNoHandler} placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="text" value={data.email} onChange={emailHandler} placeholder="Enter E-Mail" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  )
}

export default CustomerInfo