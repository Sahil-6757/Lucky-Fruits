import React from "react";
import DNavbar from "./DNavbar";
import { Outlet, Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <>
    <DNavbar/>
    <Outlet />
    
      
    </>
  );
}

export default Dashboard;
