import { CircularProgress, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EmployeeSummary } from "../../entities";
import { ApiEndpoints, API_SUCCESS } from "../../config";
import { EmployeeSummaryCard } from "../../components";

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

  return (
    <Container>
      {!!employees.length ? (
        employees.map((employee) => <EmployeeSummaryCard {...employee} />)
      ) : (
        <CircularProgress size={100} />
      )}
    </Container>
  );
};

export default Home;
