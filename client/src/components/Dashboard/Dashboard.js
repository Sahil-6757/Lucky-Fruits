import React from "react";
import DNavbar from "./DNavbar";
import { Outlet, } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <DNavbar />
      <Outlet />
    </>
  );
}

export default Dashboard;
