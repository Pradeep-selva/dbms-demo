import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Home } from "../pages";

export const Routes = () => (
  <Router>
    <Route path={"/"} element={<Home />} />
    <Route path={"/new-employee"} element={<></>} />
    <Route path={"/employee/:ssn"} element={<></>} />
  </Router>
);
