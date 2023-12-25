import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import SearchBarWrapper from "./components/SearchBarWrapper/SearchBarWrapper";
import Homepage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> }, 
  { path: "/login", element: <LoginPage/>}]);

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
