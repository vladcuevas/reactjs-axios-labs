import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword, signOut } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin({logout}) {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/admin/home');
            })
            .catch(error => alert(error.message))

    }
    
    if (logout == 1) {
        signOut(auth).then(() => {
            console.log("Logged Out!")
            navigate('/');
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        <div className='login__container'>
            <h1>Admin Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>
        </div>
    )
}

export default AdminLogin