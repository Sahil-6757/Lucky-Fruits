import React, { useEffect, useState } from "react";
import DNavbar from "./DNavbar";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState()
  const date = new Date();
  let datee = (date.getDate()) 
  let month = date.getMonth() 
  let year = date.getFullYear() 

  let todayDate = `${year}-0${month}-${datee}`;
  console.log(todayDate)

  function getData(){
  axios.get(`https://lucky-shop-backend.onrender.com/sales/${todayDate}`).then((resp)=>{
    setData(resp.data.date)
    console.log(data)
  }).catch((error)=>{
    console.log(error)
  })}

  useEffect(() => {
    
  getData();
  }, [])
  
  return (
    <>
      <DNavbar />
      <Outlet />

      <div className="rightBar">
        <div className="card" >
          <div className="card-body ">
            <p className="card-text">Today's Sales :</p>
            <p className="card-text">Today's Total :</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;
