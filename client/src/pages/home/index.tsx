import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EmployeeSummary } from "../../entities";
import { ApiEndpoints, API_SUCCESS } from "../../config";

type EmployeeList = Array<EmployeeSummary>;

const Home = () => {
  const [employees, setEmployees] = useState<EmployeeList>([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get<EmployeeList>(ApiEndpoints.employee());
      if (result.status === API_SUCCESS) {
        setEmployees(result.data);
      }
    })();
  }, []);

  console.log(employees);

  return (
    <Container>
      <h1>Employees</h1>
    </Container>
  );
};

export default Home;
