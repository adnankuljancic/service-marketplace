import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Homepage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
      setIsLoggedIn(true);
    }
  });

  const login = () => {
    // Update the state when the user logs in
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Update the state when the user logs out
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <MainNavbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
