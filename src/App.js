import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Homepage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import UserContext from "./context/AuthContext";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setUser(true);
    }
  }, []);

  const login = () => {
    // Update the state when the user logs in
    setUser(true);
  };

  const logout = () => {
    // Update the state when the user logs out
    localStorage.clear();
    setUser(false);
  };
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, login, logout }}>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
