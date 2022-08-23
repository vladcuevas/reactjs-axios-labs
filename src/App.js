import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

import './App.css';
import Header from './components/Header/Header';
import AdminHeader from './components/Header/AdminHeader';
import Home from './components/Home/Home'
import AdminHome from './components/Home/AdminHome'

import Login from './components/Login/Login';
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders'
import ErrorPage from './components/ErrorPage';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Payment from './components/Checkout/Payment/Payment';
// end react bootstrap

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="admin/home/*" element={<AdminHome />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <br /><br /><br />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;