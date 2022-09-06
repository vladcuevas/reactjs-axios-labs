import React, { useState, useMemo, useEffect, useRef } from 'react';
import Pagination from '../TableFooter/Pagination';
import styles from './AdminProduct.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, Outlet } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import useFetchData from '../../hooks/use-fetch-data'
import UpdateData from '../../hooks/update-fetch-data'
import { useStateValue } from '../../StateProvider'

function AdminProduct() {
  const [{ admin_product }, dispatch] = useStateValue()
  const [pageSize, setPageSize] = useState(4)
  // let pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1)
  let [currentTableData, setCurrentTableData] = useState(1)
  const [reload, setReload] = useState(0)

  const inputRef = useRef(null);

  console.log(admin_product.length)

  let url = 'http://localhost:8080/api/admin/medicines'

  // START End Get the data from the medicines table
  let { data, loading } = useFetchData(url, 'GET', {}, reload)
  // END End Get the data from the medicines table

  // START Delete products
  const deleteProduct = (e, id) => {
    if (window.confirm(`Do you want to delete the product ${id}?`)) {
      let deleteURL = `http://localhost:8080/api/admin/medicines/${id}`

      let deleteData = new UpdateData()
      let response = deleteData.fetchData(deleteURL, 'DELETE', {},)
      console.log()

      response.then(() => {
        setReload(reload + 1)
      }).catch((reason) => {
        if (reason.cause) {
          console.error("Had previously handled error");
        } else {
          console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
      })
    }
  }
  // START Delete products

  // https://reactjs.org/docs/hooks-reference.html#usememo
  useMemo(() => {
      inputRef.current = data.length
      let data_ = []
      if (admin_product.length > 0) { 
        data_ = admin_product
        inputRef.current = admin_product.length
      }
      else
      {
        data_ = data
      }

      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      const sliced = data_.slice(firstPageIndex, lastPageIndex)

      const newArr = sliced.map(obj => {
        try {
          let date = new Date(obj.expirationDate)
          date = date.toISOString().split('T')[0]
          return { ...obj, expirationDate: date }
        } catch (error) {
          console.error(error)
          return obj;
        }
      })

      setCurrentTableData(newArr)

    return data_
  }, [currentPage, data, admin_product])
  // ☝️In the above line we define the dependencies of the
  // useMemo hook

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div className="product">
            <div className="product__info">
              <Container fluid>
                <Row>
                  <Col><Link to="create/medicine/"><AddBoxIcon />Add Medicine</Link></Col>
                  <Col><Link to="reports"><AssessmentIcon />Reports</Link></Col>
                  <Col><Link to="customers"><GroupIcon />View Customers Info</Link></Col>
                </Row>
              </Container>
              <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                  <tr>
                    <th className={styles.tableHeader}></th>
                    <th className={styles.tableHeader}>Title</th>
                    <th className={styles.tableHeader}>Company Name</th>
                    <th className={styles.tableHeader}>Price</th>
                    <th className={styles.tableHeader}>Discount</th>
                    <th className={styles.tableHeader}>Quantity</th>
                    <th className={styles.tableHeader}>Uses</th>
                    <th className={styles.tableHeader}>Expiration Date</th>
                    <th className={styles.tableHeader}>Rating</th>
                    <th className={styles.tableHeader}>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map(el => {
                    return (
                      <tr className={styles.tableRowItems} key={el.id.toString()}>
                        <td className={styles.tableCell}>
                          <Link to={'update/medicine/' + el.id.toString()}>
                            <EditIcon className={styles.button}>Update</EditIcon>
                          </Link>
                          <DeleteForeverIcon type='button' className={styles.button} onClick={(e) => deleteProduct(e, el.id)}>Delete</DeleteForeverIcon>
                        </td>
                        <td className={styles.tableCell}>{el.name}</td>
                        <td className={styles.tableCell}>{el.companyName}</td>
                        <td className={styles.tableCell}><small>$</small>{el.price}</td>
                        <td className={styles.tableCell}><small>$</small>{el.discount}</td>
                        <td className={styles.tableCell}><small>$</small>{el.quantity}</td>
                        <td className={styles.tableCell}>{el.uses}</td>
                        <td className={styles.tableCell}>{el.expirationDate}</td>
                        <td className={styles.tableCell}>{el.rating}</td>
                        <td className={styles.tableCell}>{el.image}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={inputRef.current}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
              />
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProduct