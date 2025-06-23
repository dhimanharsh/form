import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedinUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    handleSuccess("User Loggedout success!!");
  };

  const fetchProducts = async () => {
    try {
      const url = " http://localhost:8080/products";
      const headers = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>{loggedinUser}</h1>
      {
        products.map((e,index)=>{
          return( 
          <div key={index}>
          
          <h2>{e.name}</h2>
          <h2>{e.price}</h2>
          </div>)
        })
      }
      <button onClick={handleLogout} className="signup-btn">LogOut</button>

      <ToastContainer />
    </>
  );
}

export default Home;
