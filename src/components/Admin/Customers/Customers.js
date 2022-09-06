import React, { useState, useMemo, useRef } from 'react';
import Pagination from '../../TableFooter/Pagination';

import styles from './Customers.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'

import { Link, Outlet } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useFetchData from '../../../hooks/use-fetch-data'
import UpdateData from '../../../hooks/update-fetch-data'

import CustomerHeader from "../../Header/CustomerHeader";

import { useStateValue } from '../../../StateProvider'
import {dateIsValid} from '../../../functions/dateFunctions'

// let PageSize = 4;

function Customers({ rowsPerPage }) {
  const [{ users }, dispatch] = useStateValue()
  const [pageSize, setPageSize] = useState(4)
  const [currentPage, setCurrentPage] = useState(1);
  let [currentTableData, setCurrentTableData] = useState(1)
  const [reload, setReload] = useState(0)

  const inputRef = useRef(null);

  console.log(users.length)

  let url = 'http://localhost:8080/api/admin/user'

  // START End Get the data from the users table
  const { data, loading } = useFetchData(url, 'GET', {}, reload)
  //END Get the data from the users table
  
  // START Delete products
  const deleteCustomer = (e, id) => {
    if (window.confirm(`Do you want to delete the customer ${id}?`)) {
      let deleteURL = `http://localhost:8080/api/admin/user/${id}`

      let deleteData = new UpdateData()
      let response = deleteData.fetchData(deleteURL, 'DELETE', {}, )
      console.log()

      response.then(() => {
        setReload(reload+1)
      }).catch((reason) => {
        if (reason.cause) {
          console.error("Had previously handled error");
        } else {
          console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
      })
    }
  }
  // END Delete products

  // https://reactjs.org/docs/hooks-reference.html#usememo
  useMemo(() => {
    inputRef.current = data.length
    let data_ = []
    if (users.length > 0) { 
      data_ = users
      inputRef.current = users.length
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
        let date = null
        if (dateIsValid(obj.dob)) {
          date = obj.dob
        }
        else {
          date = new Date(obj.dob)
          date = date.toISOString().split('T')[0]
        }
        return { ...obj, dob: date }
      } catch (error) {
        console.error(error)
        return obj;
      }
    })

    setCurrentTableData(newArr)

    return data_
  }, [currentPage, data, users])
  // ☝️In the above line we define the dependencies of the
  // useMemo hook

  return (
    <>
    <CustomerHeader className="text-center" />
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
              totalCount={inputRef.current}
              pageSize={pageSize}
              onPageChange={page => setCurrentPage(page)}
            />
            <Outlet />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Customers