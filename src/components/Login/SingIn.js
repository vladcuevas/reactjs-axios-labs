import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";

import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";


function SingIn() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate('/');
            }
        })
            .catch(error => alert(error.message))

    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="password" placeholder="Enter E-Mail" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" value={password} />
            </Form.Group>

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

            <Button className='login__registerButton' variant="primary" type="submit" onClick={register}>
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