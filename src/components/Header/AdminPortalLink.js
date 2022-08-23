import React from 'react'
import { Link } from "react-router-dom"

function AdminPortalLink() {
    return (
        <Link to="/admin" style={{ textDecoration: "none" }}>
            <div className="nav__item">
                <span className="nav__itemLineOne">Admin</span>
                <span className="nav__itemLineTwo">Portal</span>
            </div>
        </Link>
    )
}

export default AdminPortalLink