import React from 'react';
import './Login.css'
import { Link, Outlet } from "react-router-dom";
import {
    Routes,
    Route,
} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import UserLogin from './UserLogin';
import SingIn from './SingIn';
import AdminLogin from './AdminLogin';
import Header from '../Header/Header';

function Login() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Header className="text-center" />} />
            </Routes>
            <div className='login'>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <div className="login__logo">
                        <StorefrontIcon className="login__logoImage" fontSize="large" />
                        <h2 className="login__logoTitle">E-Health</h2>
                    </div>
                </Link>
                <Outlet />
                <Routes>
                    <Route path="/" element={<UserLogin />} >
                        <Route path="signin" element={<SingIn/>} />
                        <Route path="admin" element={<AdminLogin />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Login;