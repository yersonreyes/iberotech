import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function TableHost({ hosts }) {
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`/host/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Modelo</TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="right"
            >
              Serie
            </TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="right"
            >
              Usuario
            </TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="right"
            >
              Estado
            </TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="right"
            >
              Fecha de ingreso
            </TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hosts.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.model}
              </TableCell>
              <TableCell
                sx={{ display: { xs: "none", md: "table-cell" } }}
                align="right"
              >
                {item.serie}
              </TableCell>
              <TableCell
                sx={{ display: { xs: "none", md: "table-cell" } }}
                align="right"
              >
                {item.user}
              </TableCell>
              <TableCell
                sx={{ display: { xs: "none", md: "table-cell" } }}
                align="right"
              >
                {item.state}
              </TableCell>
              <TableCell
                sx={{ display: { xs: "none", md: "table-cell" } }}
                align="right"
              >
                {item.date}
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => onNavigate(item.id)}>Ver</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
