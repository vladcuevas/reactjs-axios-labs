import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

import './App.css';
import Home from './components/Home/Home'
import AdminHome from './components/Home/AdminHome'
import Customers from './components/Admin/Customers/Customers';
import CustomerInfo from './components/Admin/CustomerInfo/CustomerInfo'

import Login from './components/Login/Login';
// import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders'
import ErrorPage from './components/ErrorPage';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Payment from './components/Checkout/Payment/Payment';
import SignOut from './components/Login/SignOut';
// end react bootstrap

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="admin/home/*" element={<AdminHome />} />
          <Route path="admin/customers/*" element={<Customers rowsPerPage={4} />}>
            <Route path=":customerId" element={<CustomerInfo />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="/singout" element={<SignOut />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <br /><br /><br />
      </BrowserRouter>
    </div>
  )
}

export default App;