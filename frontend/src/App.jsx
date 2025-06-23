import { Route, Routes, Navigate } from "react-router-dom"; // Correct import
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Signupz from "./components/Signupz";
import { useState } from "react";
import RefreshHandler from "./components/RefreshHandler";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticate ? element : <Navigate to={"/login"} />;
  };

  return (
    <>
    <RefreshHandler setIsAuthenticate={setIsAuthenticate}/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/zz" element={<Signupz />} />
      </Routes>
    </>
  );
}

export default App;
