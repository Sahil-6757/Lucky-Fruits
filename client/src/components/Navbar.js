import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  { useState } from 'react';


function Navbar() {


  
 
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarSupportedContent" className='collapse navbar-collapse show' >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/Dashboard/dHome"} className="nav-link active" aria-current="page">
                Home
              </Link>
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
