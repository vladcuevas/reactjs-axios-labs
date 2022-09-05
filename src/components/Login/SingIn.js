import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import UpdateData from '../../hooks/update-fetch-data'

import { useNavigate } from "react-router-dom";


function SingIn() {
    let navigate = useNavigate();
    // States
    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredUserName, setUserName] = useState('')
    const [enteredFirstName, setFirstName] = useState('')
    const [enteredLastName, setLastName] = useState('')
    const [enteredDob, setDob] = useState('')
    const [enteredGender, setGender] = useState('')
    const [enteredAddress, setAddress] = useState('')
    const [enteredPhoneNo, setPhoneNo] = useState('')
    // End States

    // Fetch the data
    let url = 'http://127.0.0.1:8080/api/user'
    // End Fetch the data

    const SubmitHandler = (e) => {
        e.preventDefault();

        //reset the values of input fields
        // setEmail('');
        // setPassword('');
        // setUserName('')
        // setFirstName('')
        // setLastName('')
        // setDob('')
        // setGender('')
        // setAddress('')
        // setPhoneNo('')

        let data_raw = {
            "firstName": enteredFirstName,
            "lastName": enteredLastName,
            "userName": enteredUserName,
            "active": true,
            "email": enteredEmail,
            "gender": enteredGender,
            "address": enteredAddress,
            "phoneNumber": enteredPhoneNo,
            "dob": enteredDob,
            "password": enteredPassword,
            "roles": 'USER'
        }

        const putData = new UpdateData()

        let response = putData.fetchData(url, 'POST', data_raw)

        // In case of put, the result from the API is the 
        // response
        response.then((successMessage) => {
            alert(`User! ${successMessage.headers.location} was created, login with your user and password`)
            navigate('/');

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

    // const register = e => {
    //     e.preventDefault();

    //     createUserWithEmailAndPassword(auth, email, password).then((auth) => {
    //         if (auth) {
    //             navigate('/');
    //         }
    //     })
    //         .catch(error => alert(error.message))

    // }

    return (
        <Form>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name"
                    value={enteredUserName} onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password"
                    value={enteredPassword} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"
                    value={enteredFirstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name"
                    value={enteredLastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="text"
                    value={enteredEmail} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter E-Mail"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth"
                    value={enteredDob} onChange={e => setDob(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" placeholder="Gender"
                    value={enteredGender} onChange={e => setGender(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address"
                    value={enteredAddress} onChange={e => setAddress(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number"
                    value={enteredPhoneNo} onChange={e => setPhoneNo(e.target.value)} />
            </Form.Group>

            <Button className='login__registerButton' variant="primary" type="submit" onClick={SubmitHandler}>
                Create your E-Health Account
            </Button>

            <p>
                By signing-in you agree to the E-Health Website Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </Form>
    )
}

export default SingIn