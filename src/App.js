import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import { Navbar } from "./shared/components/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
