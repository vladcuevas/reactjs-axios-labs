import React, { useState } from 'react';
import GetData from '../../hooks/use-fetch-data-class'
import { useNavigate, Outlet, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignOut() {

    function LogOut() {
        let navigate = useNavigate();

        const signOut = e => {
            e.preventDefault();

            let url = 'http://127.0.0.1:8080/perform_logout'

            const getData = new GetData()
            let response = getData.fetchData(url, 'GET')

            response.then((successMessage) => {
                console.log(successMessage.status)
                if (successMessage.status === 200) {
                    navigate('/');
                }
                else {
                    alert("It was not possible to Sign Out")
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
                <h1>Sign-Out</h1>
                
                <Form onSubmit={signOut}>
                    <Button className='login__registerButton' variant="primary" type="submit">
                        Do you want to Sign Out?
                    </Button>
                </Form>
            </div>
        )
    }

    return (
        <div className='login__container'>
            <Routes>
                <Route path="/" element={<LogOut />} />
            </Routes>
            <Outlet />
        </div>
    )

}

export default SignOut