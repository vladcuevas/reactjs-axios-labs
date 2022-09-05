import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import UserHeader from '../Header/UserHeader'
import useTable from "../../hooks/useTable";
import useFetchData from '../../hooks/use-fetch-data'

import { Routes, Route } from "react-router-dom";

function Home() {
    let url = 'http://localhost:8080/api/admin/medicines'

    const {
        data,
        loading,
    } = useFetchData(url);

    let page = 1
    let rowsPerPage = 8

    const { slice, range } = useTable(data, page, rowsPerPage);

    function sliceIntoChunks(arr, chunkSize) {
        const res = []
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize)
            res.push(chunk)
        }
        return res
    }

    let arrs = sliceIntoChunks(slice, 2)

    return (
        <>
            <Routes>
                <Route path="/" element={<UserHeader className="text-center" />} />
            </Routes>
            <div className="home">
                <div className="home__container">
                    <img className="home__image" src="https://www.lsretail.com/hs-fs/hubfs/BLOG_-ecommerce-and-the-cloud.jpg?width=1239&height=620&name=BLOG_-ecommerce-and-the-cloud.jpg" alt="" />

                    {arrs.map((slice_home, i) => (
                        <div key={i} className="home__row">
                            {slice_home.map((el) => (
                                <Product
                                    key={el.id}
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