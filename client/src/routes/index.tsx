import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { EmployeeDetail, Home, AddNewEmployee } from "../pages";

export const Routes = () => (
  <Router>
    <Route path={"/"} element={<Home />} />
    <Route path={"/new-employee"} element={<AddNewEmployee />} />
    <Route path={"/employee/:ssn"} element={<EmployeeDetail />} />
  </Router>
);
