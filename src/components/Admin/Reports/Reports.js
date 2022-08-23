import React from 'react'
import './Reports.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SellIcon from '@mui/icons-material/Sell';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import DateRangeIcon from '@mui/icons-material/DateRange';

import ShowChartIcon from '@mui/icons-material/ShowChart';

import { Link } from 'react-router-dom';
import {
    Routes,
    Route,
    Outlet
} from "react-router-dom";

function Reports() {
    return (
        <>
            <Container fluid>
                <Row><Col><h1>Reports</h1></Col></Row>
                <Row>
                    <Col md="auto"><Link to="stockreport"><ShowChartIcon/>Stock reports</Link></Col>
                    <Col md="auto"><Link to="sellsreport"><SellIcon />Sells reports</Link></Col>
                    <Col md="auto"><Link to="productsreport"><LocalPharmacyIcon />Medicines reports</Link></Col>
                    <Col md="auto"><Link to="ordersreport"><RequestQuoteIcon />Orders reports</Link></Col>
                    <Col md="auto"><Link to="datewisereport"><DateRangeIcon />Date wise report</Link></Col>
                </Row>
            </Container>
            <hr/>
            <Outlet />
        </>
    )
}

export default Reports