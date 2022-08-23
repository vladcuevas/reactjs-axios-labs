import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";
import { Link, useNavigate, Outlet, Routes, Route } from "react-router-dom";

function UserLogin() {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/home');
            })
            .catch(error => alert(error.message))

    }

    function LogIn() {
        return (
            <>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <hr></hr>
                <div className='divider-break'>
                    New to E-Healh?
                </div>
                <form action="signin">
                    <button type='submit' className='login__registerButton'>Create Your E-Health Account</button>
                </form>
                
            </>
        )
    }

    return (
        <div className='login__container'>
            <Routes>
                <Route path="/" element={<LogIn/>} />
            </Routes>
            <Outlet />
        </div>
    )

}



export default UserLogin