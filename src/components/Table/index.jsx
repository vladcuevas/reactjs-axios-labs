import React, { useState } from "react";

import styles from "./Table.module.css";

import { Button } from 'react-bootstrap';
import AdminProduct from "../Product/AdminProduct";

const Table = ({ rowsPerPage }) => {
  return (
      <AdminProduct rowsPerPage={rowsPerPage}/>
  );
};

export default Table;