import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function DNavbar() {
  // function menuBtnChange() {
  //   if (sidebar.classList.contains("open")) {
  //     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  //   } else {
  //     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  //   }
  // }

  const handleBars = ()=>{
    
  }
  return (
    <>
      <div className="header">
        <h2 className="text-success text-center">Dashboard</h2>
      </div>
      <div className="left-panel">
        <ul>

          <li>
            <i className="fa-icon fa-solid fa-bars p-4"></i>
          </li>

          <Link to={"dHome"} className="link my-4">
            <i className="fa-icon fa-solid fa-house"></i>Home
          </Link>
          
          <Link to={"dItem"} className="link my-4">
            <i className="fa-icon fa-solid fa-list "></i>Items
          </Link>
          <Link to={"dOrder"} className="link my-4">
            <i className="fa-icon fa-solid fa-cart-shopping "></i>Order
          </Link>
          <Link to={"dContact"} className="link my-4">
            <i className="fa-icon fa-solid fa-id-card"></i>Contacts
          </Link>
          <Link to={"dUser"} className="link my-4">
            <i className="fa-icon fa-solid fa-user "></i>Users
          </Link>
          <Link to={"dHome"} className="link my-4">
            <i className="fa-icon fa-solid fa-gear "></i>Settings
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DNavbar;
