import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./shared/components/index";
import Auth from "./shared/auth";
import Landing from "./screens/landingPage";
import LeaderboardPage from "./screens/leaderboardPage";
import NewUser from "./screens/newUser";
import UserContext from "./shared/contexts/userContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
