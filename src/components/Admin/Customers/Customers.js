import React, { useState, useMemo } from 'react';
import Pagination from '../../TableFooter/Pagination';

import styles from './Customers.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'

import { Link, Outlet } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useFetchData from '../../../hooks/use-fetch-data'
import DeleteData from '../../../hooks/delete-fetch-data'

let PageSize = 4;

function Customers({ rowsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  let [currentTableData, setCurrentTableData] = useState(1)
  const [reload, setReload] = useState(false)

  let url = 'http://localhost:8080/api/admin/user'

  const {
    data, loading
  } = useFetchData(url, reload)

  const deleteCustomer = (e, id) => {
    if (window.confirm(`Do you want to delete the customer ${id}?`)) {
      let deleteURL = `http://localhost:8080/api/admin/user/${id}`

      let deleteData = new DeleteData()
      deleteData.fetchData(deleteURL)

      setReload(!reload)
    }
  }

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const sliced = data.slice(firstPageIndex, lastPageIndex)

    const newArr = sliced.map(obj => {
      try {
        let date = new Date(obj.dob)
        console.log(date)
        date = date.toISOString().split('T')[0]
        return { ...obj, expirationDate: date }
      } catch (error) {
        console.error(error)
        return obj;
      }
    })

    setCurrentTableData(newArr)

    return data
  }, [currentPage, data])

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="product">
          <div className="product__info">
            <Container fluid>
              <h1>Customers</h1>
            </Container>
            <table className={styles.table}>
              <thead className={styles.tableRowHeader}>
                <tr>
                  <th className={styles.tableHeader}></th>
                  <th className={styles.tableHeader}>First Name</th>
                  <th className={styles.tableHeader}>Last Name</th>
                  <th className={styles.tableHeader}>User Name</th>
                  <th className={styles.tableHeader}>Roles</th>
                  <th className={styles.tableHeader}>Active</th>
                  <th className={styles.tableHeader}>E-Mail</th>
                  <th className={styles.tableHeader}>Gender</th>
                  <th className={styles.tableHeader}>Address</th>
                  <th className={styles.tableHeader}>Phone Number</th>
                  <th className={styles.tableHeader}>Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map(el => {
                  return (
                    <tr className={styles.tableRowItems} key={el.id.toString()}>
                      <td className={styles.tableCell}>
                        <Link to={el.id.toString()}><EditIcon className={styles.button}>Update</EditIcon></Link>
                        <DeleteForeverIcon type='button' className={styles.button} onClick={(e) => deleteCustomer(e, el.id)}>Delete</DeleteForeverIcon>
                      </td>
                      <td className={styles.tableCell}>{el.firstName}</td>
                      <td className={styles.tableCell}>{el.lastName}</td>
                      <td className={styles.tableCell}>{el.userName}</td>
                      <td className={styles.tableCell}>{el.roles}</td>
                      <td className={styles.tableCell}>{el.active.toString()}</td>
                      <td className={styles.tableCell}>{el.email}</td>
                      <td className={styles.tableCell}>{el.gender}</td>
                      <td className={styles.tableCell}>{el.address}</td>
                      <td className={styles.tableCell}>{el.phoneNumber}</td>
                      <td className={styles.tableCell}>{el.dob}</td>
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
      )}
    </div>
  )
}

export default Customers