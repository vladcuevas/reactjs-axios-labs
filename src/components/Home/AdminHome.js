import React, { useState } from "react";
import "./Home.css"
import "./AdminHome.css"
import AdminProduct from '../Product/AdminProduct'
import CreateProduct from "../Product/CreateProduct";
import UpdateProduct from "../Product/UpdateProduct";
import StockReport from "../../components/Admin/Reports/Stock"
import SellsReport from "../../components/Admin/Reports/Sells"
import MedicinesReport from "../../components/Admin/Reports/ProductsReport"
import OrdersReport from "../../components/Admin/Reports/Orders"
import DateWiseReport from "../../components/Admin/Reports/DateWiseReport"
import CustomerInfo from "../../components/Admin/CustomerInfo/CustomerInfo"

import {
    Routes,
    Route,
    useParams,
    Outlet
} from "react-router-dom";
import Reports from "../Admin/Reports/Reports";
import Customers from "../Admin/Customers/Customers";
import AdminHeader from "../Header/AdminHeader";

function AdminHome() {
    return (
        <>
        <AdminHeader className="text-center" />
        <div className="home">
            <div className="div_100">
                <Routes>
                    <Route path="/" element={<AdminProduct rowsPerPage={4} />} >
                        <Route path="/update/medicine/:productId" element={<UpdateProduct />} />
                    </Route>
                    <Route path="/create/medicine" element={<CreateProduct />} />
                    <Route path="/reports/" element={<Reports />} >
                        <Route path="/reports/stockreport" element={<StockReport />} />
                        <Route path="/reports/sellsreport" element={<SellsReport />} />
                        <Route path="/reports/productsreport" element={<MedicinesReport />} />
                        <Route path="/reports/ordersreport" element={<OrdersReport />} />
                        <Route path="/reports/datewisereport" element={<DateWiseReport />} />
                    </Route>
                    <Route path="/customers" element={<Customers rowsPerPage={4} />}>
                        <Route path=":customerId" element={<CustomerInfo />} />
                    </Route>
                </Routes>
            </div>
        </div>
        </>
    )
}

export default AdminHome