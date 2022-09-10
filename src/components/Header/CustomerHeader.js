import React, {useState} from 'react'
import './Header.css'

import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, Routes, Route, useLocation } from "react-router-dom"
import AdminPortalLink from './AdminPortalLink';

import { useStateValue } from '../../StateProvider'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import GetData from '../../hooks/use-fetch-data-class'

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

function CustomerHeader() {

    const { state } = useLocation()
    // console.log(state)
    // const { userName } = state;

    const [{ admin_product }, dispatch] = useStateValue()

    const [searchInput, setSearchInput] = useState('')

    // START Handlers

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
      }

    const SubmitHandler = (e) => {
        e.preventDefault();

        let data_raw = {}

        const url = `http://localhost:8080/api/admin/user/name/${searchInput}`

        let credentials = {username: 'admin', password: 'admin'}
        
        const getData = new GetData()
        let response = getData.fetchData(url, 'GET', data_raw, credentials)

        // In case of put, the result from the API is the 
        // response
        response.then((successMessage) => {
            dispatch({
                type: "DELETE_USER_NAME"
            })

            if (successMessage.data.length === 0) {
                alert('There are no users with this name')
            }

            for (const el of successMessage.data) {
                dispatch({
                    type: "ADD_TO_USER_NAME",
                    item: {
                        id: el.id, 
                        firstName: el.firstName,
                        lastName: el.lastName, 
                        userName: el.userName, 
                        email: el.email,
                        gender: el.gender,
                        address: el.address,
                        phoneNumber: el.phoneNumber,
                        dob: el.dob,
                        password: el.password,
                        roles: el.roles,
                        active: el.active
                    }
                    })
            }
        }).catch((reason) => {
            if (reason.cause) {
                console.error("Had previously handled error");
            } else {
                console.error(`Trouble with promiseGetWord(): ${reason}`);
            }
        })

        // End Put the data
        return response
    }
    // End Handlers

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <LocalPharmacyIcon className="header__logoImage" fontSize="large" />
                    <h2 className="header__logoTitle">E-Health</h2>
                </div>
            </Link>

            <Form onSubmit={SubmitHandler} className="div_100_header">
                <Form.Group className="mb-3 header__search" controlId="formSearch">
                    <Form.Control type="text" placeholder="Enter text to search by User Name"
                        className="header__searchInput"
                        value={searchInput}
                        onChange={searchInputHandler} />
                    <Button variant="primary" type="submit" className="header__searchButton" >
                        Search
                    </Button>
                </Form.Group>
            </Form>

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

export default CustomerHeader