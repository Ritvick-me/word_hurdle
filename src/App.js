import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./shared/components/index";
import Auth from "./shared/auth";
import Landing from "./screens/landingPage";
import NewUser from "./screens/newUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
