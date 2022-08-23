import React, { useState } from "react";

import styles from './Customers.module.css'

import useTable from "../../../hooks/useTable";
import TableFooter from "../../TableFooter";

import { useStateValue } from "../../../StateProvider";

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';

import { Link, Outlet } from 'react-router-dom';

import productData from '../../../data/customers'

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Customers({ rowsPerPage }) {
  const [state, dispatch] = useStateValue()
  const [products] = useState([...productData]);

  let data = products

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const showAlert = () => {
      if (window.confirm("Delete?"))
      { 
        alert("I'm deleting");
      }
    }

  return (
    <div className="product">
      <div className="product__info">
        <Container fluid>
          <h1>Customers</h1>
        </Container>
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}></th>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>Last Name</th>
              <th className={styles.tableHeader}>Date of Birth</th>
              <th className={styles.tableHeader}>Address</th>
              <th className={styles.tableHeader}>Phone Number</th>

            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr className={styles.tableRowItems} key={el.id.toString()}>
                <td className={styles.tableCell}>
                  <Link to={el.id.toString()}><EditIcon className={styles.button}>Update</EditIcon></Link>
                  <DeleteForeverIcon type='button' className={styles.button} onClick={showAlert}>Delete</DeleteForeverIcon>
                </td>
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.last_name}</td>
                <td className={styles.tableCell}>{el.date_of_birth}</td>
                <td className={styles.tableCell}>{el.address}</td>
                <td className={styles.tableCell}>{el.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        <Outlet />
      </div>
    </div>
  )
}

export default Customers