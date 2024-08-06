import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";

import { DataGrid } from "@mui/x-data-grid";
function Dhome() {
  const [rows, setrows] = useState();

  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "rate", headerName: "Rate", width: 130 },
    { field: "quantity", headerName: "Quantity", width: 130 },
    { field: "total", headerName: "Total", width: 130 },
    { field: "action", headerName: "Action", width: 130 },
  ];

  const getData = () => {
    axios.get("https://lucky-shop-backend.onrender.com:10000/sales").then((resp) => {
      setrows(resp.data);
      console.log(rows);
    });
  };

  useEffect(() => {
    getData();
  },[]);

  const [totalVal, setTotal] = useState();

  let result;
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    rate: "",
    quantity: "",
    total: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value, total: totalVal });
  };

  function sum() {
    result = parseInt(formData.rate * formData.quantity);
    setTotal(result);
    setFormData({ ...formData, total: result });
  }

  const handleBlur = () => {
    sum();

    // formData.total = total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(formData.name && formData.date && formData.rate && formData.quantity)
    ) {
      toast.warn("Fields are empty", {
        autoClose: 1000,
        pauseOnFocusLoss: false,
      });
    } else {
      axios.post("https://lucky-shop-backend.onrender.com:10000/sales", formData).then((resp) => {
        console.log(resp.data);
      });
      toast.success("Successfully Saved", {
        autoClose: 1000,
      });
      getData();
    }
    getData();

  };
  return (
    <div className="container" style={{ width: "32rem" }}>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          className="form-control my-1"
          placeholder="name"
        />
        <input
          type="date"
          name="date"
          id=""
          onChange={handleChange}
          className="form-control my-1"
        />
        <input
          type="number"
          name="rate"
          id=""
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control my-1"
          placeholder="rate"
        />
        <input
          type="number"
          name="quantity"
          id=""
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control my-1"
          placeholder="quantity"
        />

        <hr />
        <h4 className="d-flex justify-content-center">Total = {totalVal}</h4>
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>


      <DataGrid
      className="my-3"
        style={{ width: "50rem" }}
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
      <Outlet />
    </div>
  );
}

export default Dhome;
