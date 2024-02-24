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
import styles from "../../Styles/List/List.module.css";
import search from "../../assets/images/List/Search.png";
import { useSelector } from "react-redux";

export default function List() {
  const todoArray = useSelector((state: any) => state.todos.todoArray);
  const tableRoutes = [
    { routeName: "پیش فرض", routeId: 1, routePath: "/toDoListDefault" },
    { routeName: "دسته بندی", routeId: 2, routePath: "/toDoListCategory" },
  ];
  const tableHeader = ["عنوان", "توضیح کوتاه", "تاریخ"];

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
                color: "white"
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
          <TableContainer component={Paper} sx={{ display: "flex",background:'red' }}>
            <Table sx={{}}>
              <TableHead
                sx={{
                  backgroundColor: "#31A2A9",
                  boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  color: "white",
                }}
              >
                <TableRow >
                  <TableCell padding="checkbox" >
                    <Checkbox
                      style={{
                        color: "white",
                      }}
                    />
                  </TableCell>
                  {tableHeader.map((header, index) => (
                    <TableCell
                      key={index}
                      style={{ fontFamily: "none", color: "white" ,
}}  
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  backgroundColor: "#31A2A9",
                  boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {(rowsPerPage > 0
                  ? todoArray.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : todoArray
                ).map(
                  (row: {
                    id: number;
                    title: string;
                    shortDescription: string;
                    date: string;
                  }) => (
                    <TableRow key={row.id} sx={{borderTop: '10px solid var(--blue0)'}}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          style={{
                            color: "white",
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ fontFamily: "none", color: "white" }}>
                        {row.title}
                      </TableCell>
                      <TableCell style={{ fontFamily: "none", color: "white" }}>
                        {row.shortDescription}
                      </TableCell>
                      <TableCell style={{ fontFamily: "none", color: "white" }}>
                        {row.date}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <TablePagination
        dir="ltr"
          sx={{ display: "flex" , color: "white" , justifyContent:'flex-end' }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={todoArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page :"
          labelDisplayedRows={({ from, to, count }) =>
            ` ${count}of${from}-${to}   `
          }
        />
      </div>
    </main>
  );
}
