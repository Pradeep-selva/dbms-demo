import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { EmployeeDetail, Home, NewEmployee } from "../pages";

export const Routes = () => (
  <Router>
    <Route path={"/"} element={<Home />} />
    <Route path={"/new-employee"} element={<NewEmployee />} />
    <Route path={"/employee/:ssn"} element={<EmployeeDetail />} />
  </Router>
);
