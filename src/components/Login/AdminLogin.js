import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GetData from '../../hooks/use-fetch-data-class'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminLogin() {

    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        const credentials = { "username": userName, "password": password };
        console.log(credentials)

        let url = 'http://127.0.0.1:8080/api/admin/'

        const getData = new GetData()
        let response = getData.fetchData(url, 'GET', {}, credentials)

        response.then((successMessage) => {
            if (successMessage.status === 200) {
                // console.log(successMessage)
                navigate('/admin/home');
            }
            else {
                alert("Incorrect User or password")
            }
        }).catch((reason) => {
            console.log("not logged")
            if (reason.cause) {
                console.error("Had previously handled error");
            } else {
                console.error(`Trouble with promiseGetWord(): ${reason}`);
            }
        })
    }

    return (
        <div>
            <h1>Admin Sign-in</h1>

            <Form onSubmit={signIn}>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label><h5>User Name</h5></Form.Label>
                    <Form.Control type="text" value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                    placeholder="Enter name" 
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label><h5>Password</h5></Form.Label>
                    <Form.Control type="password" value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Enter name" 
                />
                </Form.Group>

                <Button className='login__signInButton' variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    )
}

export default AdminLogin