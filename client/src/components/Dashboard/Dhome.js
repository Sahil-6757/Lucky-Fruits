import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";

import { DataGrid } from "@mui/x-data-grid";
function Dhome() {
  const [rows, setrows] = useState([]);
  const [Id, setId] = useState()

  // const columns = [
  //   { field: "name", headerName: "Name", width: 130 },
  //   { field: "date", headerName: "Date", width: 130 },
  //   { field: "rate", headerName: "Rate", width: 130 },
  //   { field: "quantity", headerName: "Quantity", width: 130 },
  //   { field: "total", headerName: "Total", width: 130 },
  //   { field: "action", headerName: "Action", width: 130 },
  // ];

  const getData = () => {
    axios.get("https://lucky-shop-backend.onrender.com/sales").then((resp) => {
      setrows(resp.data);
      console.log(rows);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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

  // const handleClick = (Eid,Ename,Edate,Erate,Equantity) =>{
  //   console.log(Ename,Edate,Erate,Equantity);
  //   document.getElementById("name").value = Ename
  //   document.getElementById("date").value = Edate
  //   document.getElementById("rate").value = Erate
  //   document.getElementById("quantity").value = Equantity

   
  // } 

  // const handleEdit = ()=>{
  //   console.log(formData);
  //   axios.put(`https://lucky-shop-backend.onrender.com/sales-edit/${Eid}`,formData).then((resp)=>{
  //     console.log(resp.data);
  //   })
  // }

  const handleDelete = (e) => {
    console.log(e);
    axios
      .delete(`https://lucky-shop-backend.onrender.com/sales-delete/${e}`)
      .then(async (resp) => {
        console.log(resp.data.message);
       await getData();
       toast.success('Deleted Succssfully',{
        autoClose:1000
       })
      }
    
    ).catch((error)=>{
        console.log(error);
      });
      getData();
  };

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
      axios
        .post("https://lucky-shop-backend.onrender.com/sales", formData)
        .then((resp) => {
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
          id="name"
          onChange={handleChange}
          className="form-control my-1"
          placeholder="name"
        />
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
          className="form-control my-1"
        />
        <input
          type="number"
          name="rate"
          id="rate"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control my-1"
          placeholder="rate"
        />
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control my-1"
          placeholder="quantity"
        />

        <hr />
        <h4 className="d-flex justify-content-center">Total = {totalVal}</h4>
        <input type="submit" value="Save" className="btn btn-primary" />
        <input type="button" value="Edit"
        //  onClick={handleEdit}
          className="mx-3 btn btn-secondary" />
      </form>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Rate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((value, index) => {
            return (
              <tr 
              // onClick={()=>handleClick(value._id,value.name,value.date,value.rate,value.quantity)}
              >
                <th scope="row">{index + 1}</th>
                <td>{value.name}</td>
                <td>{value.date}</td>
                <td>{value.rate}</td>
                <td>{value.quantity}</td>
                <td>{value.total}</td>
                <td>
                  <i
                    class="fa-solid fa-trash text-danger mx-3 "
                    onClick={() => {
                      handleDelete(value._id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Material UI GridView */}
      {/* <DataGrid
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
        
      /> */}
      <Outlet />
    </div>
  );
}

export default Dhome;
