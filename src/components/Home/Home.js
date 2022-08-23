import React, { useState } from 'react'
import "./Home.css"
import Product from '../Product/Product'
import UserHeader from '../Header/UserHeader'
import productData from '../../data/products'
import useTable from "../../hooks/useTable";

import { Link, Outlet, Routes, Route, } from "react-router-dom";

function Home() {

    const [ products ] = useState([...productData]);

    let data = products
    let page = 1
    let rowsPerPage = 8
    const { slice, range } = useTable(data, page, rowsPerPage);

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    let home__row_len = Math.ceil(7 / 2);

    let arrs = sliceIntoChunks(slice, 2)

    return (
        <>
        <Routes>
          <Route path="/" element={<UserHeader className="text-center" />} />
         </Routes>
        <div className="home">
            <div className="home__container">
                <img src="https://www.lsretail.com/hs-fs/hubfs/BLOG_-ecommerce-and-the-cloud.jpg?width=1239&height=620&name=BLOG_-ecommerce-and-the-cloud.jpg" alt="" className="home__image" />

                {arrs.map((slice_home) => (
                    <div className="home__row">
                    {slice_home.map((el) => (
                        <Product
                        id={el.id}
                        title={el.title}
                        price={el.price}
                        rating={el.rating}
                        image={el.image}
                        />
                    ))}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home