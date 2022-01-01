import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components";
import { Routes } from "../routes";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
