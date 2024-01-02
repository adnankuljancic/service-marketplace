import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Homepage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
