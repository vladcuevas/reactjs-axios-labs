import React, { useState, useMemo } from 'react';
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

let PageSize = 4;

function AdminProduct({ rowsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  let url = 'http://localhost:8080/api/admin/medicines'

  const {
    data, loading
  } = useFetchData(url)

  const showAlert = () => {
    if (window.confirm("Delete?")) {
      alert("I'm deleting");
    }
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data])

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
                          <Link to={'update/medicine/' + el.id.toString()}><EditIcon className={styles.button}>Update</EditIcon></Link>
                          <DeleteForeverIcon type='button' className={styles.button} onClick={showAlert}>Delete</DeleteForeverIcon>
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
                totalCount={data.length}
                pageSize={PageSize}
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