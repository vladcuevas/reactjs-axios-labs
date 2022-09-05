import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useStateValue } from '../../StateProvider'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import GetData from '../../hooks/use-fetch-data-class'

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// end react bootstrap

function Header() {
    const { state } = useLocation()
    // console.log(state)
    const { userName } = state;

    const [{ basket }, dispatch] = useStateValue()

    let navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();

        let data_raw = {
            "firstName": 'Amazon'
        }

        const url = 'http://127.0.0.1:8080/api/user/medicines/name/aspirin'

        let credentials = {username: 'user', password: 'user'}
        
        const getData = new GetData()
        let response = getData.fetchData(url, 'GET', data_raw, credentials)

        // In case of put, the result from the API is the 
        // response
        response.then((successMessage) => {
            for (const el of successMessage.data) {
                dispatch({
                    type: "ADD_TO_BASKET",
                    item: {
                        id: el.id, 
                        name: el.name,
                        image: el.image, 
                        price: el.price, 
                        rating: el.rating,
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

            <Form onSubmit={SubmitHandler} className="div_100">
                <Form.Group className="mb-3 header__search" controlId="formSearch">
                    <Form.Control type="text" placeholder="Enter text to search for a medicine"
                        className="header__searchInput" />
                    <Button variant="primary" type="submit" className="header__searchButton" >
                        Search
                    </Button>
                    {/* <SearchIcon className="header__searchIcon"></SearchIcon> */}
                </Form.Group>
            </Form>

            <div className="header__nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Hello</span>
                        <span className="nav__itemLineOne">{userName}</span>
                        <span className="nav__itemLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/orders" style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Status of</span>
                        <span className="nav__itemLineTwo">My Orders</span>
                    </div>
                </Link>

                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <ShoppingBasketIcon />
                        <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header