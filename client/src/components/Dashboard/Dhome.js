import React from "react";
import { Outlet } from "react-router-dom";

function Dhome() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{width:"32rem",height:"22rem"}}></div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{width:"32rem",height:"22rem"}}></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dhome;
