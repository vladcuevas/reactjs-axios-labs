import React from 'react';
import './Footer.css'

import {
    Link
  } from "react-router-dom";

export default function Footer()
{
    return (
        <div className='footer'>
            <div className="footer__logoTitle">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h3>E-Health</h3> 
                </Link>  
                <p>All Rights Reserved</p>
            </div>         
        </div>
    )
}