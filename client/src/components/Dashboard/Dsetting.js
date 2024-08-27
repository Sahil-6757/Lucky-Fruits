import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Dashboard.css";
<<<<<<< HEAD
=======
import Button from '@mui/material/Button';
>>>>>>> f809edeadc9bf4406da4bc800c1fe200b8185eb4

function Dsetting() {
  const [rows, setrows] = useState([]);
  const [Id, setId] = useState();

  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "rate", headerName: "Rate", width: 130 },
    { field: "quantity", headerName: "Quantity", width: 130 },
    { field: "total", headerName: "Total", width: 130 },
  ];

  const getData = () => {
    axios.get("https://lucky-shop-backend.onrender.com/sales").then((resp) => {
      setrows(resp.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
<<<<<<< HEAD
    
    <div className="container mx-3">        
      <DataGrid
      
=======
    <div className="Datagrid">
      <DataGrid
        className="my-3 mx-3"
        style={{ width: "50rem", marginLeft: "2rem !important" }}
>>>>>>> f809edeadc9bf4406da4bc800c1fe200b8185eb4
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}

export default Dsetting