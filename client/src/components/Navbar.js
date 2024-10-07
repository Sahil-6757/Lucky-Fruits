import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar main-navbar  navbar-expand-lg bg-body-tertiary">
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
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse show"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
          </ul>
          <div className="Navbar-login">
            <Link
              to="cart"
              className="fa-solid fa-cart-shopping cart-icon align-center"
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
