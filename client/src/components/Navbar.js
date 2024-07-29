import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  { useState } from 'react';


function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick () {
    console.log("jgdhg")
    setIsActive(!isActive);
  };
  // Function to toggle the class on a different element
  useEffect(() => {
    
    handleClick()
    
  }, [])
  
 
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-success" href="/">
          <Link to={"/"} className="nav-link active" aria-current="page">
            Lucky Fruits
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick={()=>handleClick()}></span>
        </button>
        <div  id="navbarSupportedContent" className={isActive ? 'collapse navbar-collapse show' : 'collapse navbar-collapse '}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link> */}
            </li>
          </ul>
          <div className="">
            <Link
              to="cart"
              className="fa-solid fa-cart-shopping align-center"
            ></Link>
            <Link to="login" className="btn login-btn mx-3">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
