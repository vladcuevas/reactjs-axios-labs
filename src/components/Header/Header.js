import React from 'react'
import './Header.css'
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import { Link } from "react-router-dom"



import AdminPortalLink from './AdminPortalLink';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// end react bootstrap

function Header() {
    return (
        <div className="header">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <div className="header__logo">
                                <LocalPharmacyIcon className="header__logoImage" fontSize="large" />
                                <h2 className="header__logoTitle">E-Health</h2>
                            </div>
                        </Link>
                    </Col>
                    <Col className="header__nav" md="auto">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <div className="nav__item">
                                <span className="nav__itemLineOne">Hello Guest</span>
                                <span className="nav__itemLineTwo">Sign In</span>
                            </div>
                        </Link>
                        <AdminPortalLink />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header