import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
} from "@mui/material";
import "./App.css";
import styles from "./Styles/List/List.module.css";
import search from "./assets/images/List/Search.png";

function App() {
  const tableRoutes = [
    { routeName: "Default", routeId: 1, routePath: "/" },
    { routeName: "Categories", routeId: 2, routePath: "/" },
  ];
  const tableHeader = ["عنوان", "توضیح کوتاه", "تاریخ"];
  const tableData = [
    { id: 1, title: "تسک اول", shortDescription: "تست", date: "یهتاریخی" },
    { id: 2, title: "تسک اول", shortDescription: "تست", date: "یهتاریخی" },
    { id: 3, title: "تسک اول", shortDescription: "تست", date: "یهتاریخی" },
    { id: 4, title: "تسک اول", shortDescription: "تست", date: "یهتاریخی" },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <main className={styles.container}>
      <div className={styles.title}>List</div>
      <div className={styles.tableBox}>
        <div className={styles.tableBoxRoutes}>
          {tableRoutes.map((item) => (
            <NavLink
              key={item.routeId}
              to={item.routePath}
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid #F1C400" : "white",
                height: "60%",
                textDecoration: "none",
              })}
            >
              {item.routeName}
            </NavLink>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Search" />
          <img src={search} alt="Search" />
        </div>
        <div className={styles.table} dir="rtl">
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#31A2A9" }}>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  {tableHeader.map((header, index) => (
                    <TableCell key={index}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "#31A2A9" }}>
                {(rowsPerPage > 0
                  ? tableData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : tableData
                ).map((row) => (
                  <TableRow key={row.id} >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.shortDescription}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{ display: "flex", alignItems: "flex-end" }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Rows per page:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} of ${count}`
            }
          />
        </div>
      </div>
    </main>
  );
}

export default App;
