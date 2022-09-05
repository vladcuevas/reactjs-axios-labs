import React from 'react'
import './Header.css'

import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Link, Routes, Route } from "react-router-dom"
import { useStateValue } from '../../StateProvider'
import AdminPortalLink from './AdminPortalLink';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

function AdminHeader() {

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <LocalPharmacyIcon className="header__logoImage" fontSize="large" />
                    <h2 className="header__logoTitle">E-Health</h2>
                </div>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Routes>
                    <Route path='/' element={<AdminPortalLink />} />
                </Routes>
                <Link to="/singout" logout="1" style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <LogoutIcon/>
                        <span className="nav__itemLineTwo nav__basketCount">Logout</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AdminHeader