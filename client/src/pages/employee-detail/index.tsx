import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ApiEndpoints, API_SUCCESS } from "../../config";
import { Employee } from "../../entities";
import { getCapitalizedName } from "../../utils";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState<Employee>({} as any as Employee);
  const [notFound, setNotFound] = useState(false);
  const { ssn } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get<Employee>(
          ApiEndpoints.singleEmployee(ssn!)
        );
        if (result.status === API_SUCCESS) {
          setEmployee(result.data);
        } else {
          setNotFound(true);
        }
      } catch (e) {
        console.error(e);
        setNotFound(true);
      }
    })();
  }, [ssn]);

  const renderEmployeeTable = () => (
    <TableContainer component={Paper} style={{ width: "80vw" }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>SSN</b>
            </TableCell>
            <TableCell align='right'>
              <b>Birthday</b>
            </TableCell>
            <TableCell align='right'>
              <b>Sex</b>
            </TableCell>
            <TableCell align='right'>
              <b>Address</b>
            </TableCell>
            <TableCell align='right'>
              <b>Salary</b>
            </TableCell>
            <TableCell align='right'>
              <b>Dept. No.</b>
            </TableCell>
            <TableCell align='right'>
              <b>Super SSN</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              {ssn}
            </TableCell>
            <TableCell align='right'>{employee.bdate}</TableCell>
            <TableCell align='right'>{employee.sex}</TableCell>
            <TableCell align='right'>{employee.address}</TableCell>
            <TableCell align='right'>{employee.salary}</TableCell>
            <TableCell align='right'>{employee.dno}</TableCell>
            <TableCell align='right'>{employee.super_ssn}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderDepartmentTable = () => (
    <TableContainer component={Paper} style={{ width: "80vw" }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Number</b>
            </TableCell>
            <TableCell align='right'>
              <b>Name</b>
            </TableCell>
            <TableCell align='right'>
              <b>Manager SSN</b>
            </TableCell>
            <TableCell align='right'>
              <b>Manager Start Date</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              {employee.dno}
            </TableCell>
            <TableCell align='right'>{employee.dname}</TableCell>
            <TableCell align='right'>{employee.mgr_ssn}</TableCell>
            <TableCell align='right'>{employee.mgr_start_date}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderProjectTable = () => (
    <TableContainer component={Paper} style={{ width: "80vw" }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Number</b>
            </TableCell>
            <TableCell align='right'>
              <b>Name</b>
            </TableCell>
            <TableCell align='right'>
              <b>Location</b>
            </TableCell>
            <TableCell align='right'>
              <b>Hours Worked</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              {employee.pno}
            </TableCell>
            <TableCell align='right'>{employee.pname}</TableCell>
            <TableCell align='right'>{employee.plocation}</TableCell>
            <TableCell align='right'>{employee.hours}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box
      {...{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        flexDirection: "column"
      }}
    >
      {!Object.keys(employee).length ? (
        notFound ? (
          <Typography
            variant='h3'
            style={{ marginBottom: "2rem", width: "40vw" }}
          >
            SSN: {ssn} <br /> Does not exist!
          </Typography>
        ) : (
          <CircularProgress size={100} />
        )
      ) : (
        <>
          <Typography variant='h3' style={{ marginBottom: "4rem" }}>
            <u>
              <b>{getCapitalizedName(employee.fname, employee.lname)}</b>
            </u>
          </Typography>
          <Typography variant='h5' style={{ marginBottom: "1rem" }}>
            Details
          </Typography>
          {renderEmployeeTable()}
          <Typography
            variant='h5'
            style={{ marginBottom: "1rem", marginTop: "3rem" }}
          >
            Department
          </Typography>
          {renderDepartmentTable()}
          <Typography
            variant='h5'
            style={{ marginBottom: "1rem", marginTop: "3rem" }}
          >
            Project
          </Typography>
          {renderProjectTable()}
        </>
      )}
    </Box>
  );
};

export default EmployeeDetail;
