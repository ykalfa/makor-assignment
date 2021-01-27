import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import data from '../data/firstTable'

const useStyles = makeStyles({
  table: {
    height: "100",
    backgroundColor: "#000",
    borderRadius: "0px",
    overflowX: "scroll",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px #3f4754",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#5c6471",
      outline: "1px solid slategrey"
    }
  },
  tableCell: {
    height: "1vmin",
    border: "0px",
    padding: "6px",
    color: "#fff",
    fontWeight: "normal",
    fontSize: "1.2vmin",
    lineHeight: "2vmin"
  },
  tableCellHeader: {
    border: "0px",
    height: "1vmin",
    padding: "6px",
    color: "#696969",
    fontWeight: "normal",
    fontSize: "1.2vmin",
    lineHeight: "2vmin"
  }
});


export default function BasicTable() {

    
  const classes = useStyles();
  const headers = [
    "Trade date",
    "Side",
    "Product",
    "Quantity",
    "Price",
    "Counterparly",
    "Provider Price",
    "Sales pl",
    "Type",
    "Execution",
    "Status"
  ];


  return (
    <TableContainer component={Paper} style={{height:"17vmin"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableCellHeader}>
            {headers.map((header) => (
              <TableCell className={classes.tableCellHeader} align="center">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                {row.date}
              </TableCell>
              <TableCell className={classes.tableCell} style={{color: row.side === "BUY" ? "green" : "red"}} align="center">
                {row.side}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.product}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.quatity}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.price}
              </TableCell>
              <TableCell className={classes.tableCell} style={{color:"#ff8421"}} align="center">
                {row.counterParly}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.providerPrice}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.salespl}
              </TableCell>
              <TableCell className={classes.tableCell} style={{color:"#ff8421"}} align="center">
                {row.type}
              </TableCell>
              <TableCell className={classes.tableCell} style={{color:"#ff8421"}} align="center">
                {row.execution}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
