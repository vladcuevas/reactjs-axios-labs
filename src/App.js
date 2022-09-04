import React, {useState} from 'react';

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

import Login from './components/Login/Login';
// import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders'
import ErrorPage from './components/ErrorPage';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Payment from './components/Checkout/Payment/Payment';
// end react bootstrap

const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="admin/home/*" element={<AdminHome />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <br /><br /><br />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;