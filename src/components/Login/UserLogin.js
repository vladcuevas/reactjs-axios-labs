import React, { useState } from 'react';
import GetData from '../../hooks/use-fetch-data-class'
import { useNavigate, Outlet, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserLogin() {

    function LogIn() {
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');

        const userNameHandler = (e) => {
            setUserName(e.target.value)
        }
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        }

        let navigate = useNavigate();

        const createUser = e => {
            e.preventDefault();
            navigate('/signin');
        }

        const signIn = e => {
            e.preventDefault();

            const credentials = { "username": userName, "password": password };
            console.log(credentials)

            let url = 'http://127.0.0.1:8080/api/'

            const getData = new GetData()
            let response = getData.fetchData(url, 'GET', {}, credentials)

            response.then((successMessage) => {
                if (successMessage.status === 200) {
                    navigate('/home', { state: { userName: userName } });
                }
                else {
                    alert("Incorrect User or password or user is not active")
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
            <div key={'login_____page'}>
                <h1>Sign-in</h1>
                <Form onSubmit={signIn}>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label><h5>User Name</h5></Form.Label>
                        <Form.Control type="text" value={userName}
                            onChange={userNameHandler} placeholder="Enter name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label><h5>Password</h5></Form.Label>
                        <Form.Control type="password" value={password}
                            onChange={passwordHandler} placeholder="Enter name"
                        />
                    </Form.Group>

                    <Button className='login__signInButton' variant="primary" type="submit">
                        Login
                    </Button>

                </Form>
                <hr></hr>
                <div className='divider-break'>
                    New to E-Healh?
                </div>

                <Form onSubmit={createUser}>
                    <Button className='login__registerButton' variant="primary" type="submit">
                        Create Your E-Health Account
                    </Button>
                </Form>
            </div>
        )
    }

    return (
        <div className='login__container'>
            <Routes>
                <Route path="/" element={<LogIn />} />
            </Routes>
            <Outlet />
        </div>
    )

}

export default UserLogin