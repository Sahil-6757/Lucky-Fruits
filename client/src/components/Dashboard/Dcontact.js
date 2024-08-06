import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Dashboard.css";

function Dcontact() {
  const [Contact, setContact] = useState();
  async function getData() {
    axios.get("https://localhost:10000").then((resp) => {
      setContact(resp.data);
    });
  }

  const handleDelete = (item) => {
    try {
      axios.delete(`https://localhost:10000/delete/${item}`).then((resp) => {
        if (resp.data.message === "Deleted") {
          toast.success("Deleted Successfully", {
            autoClose: 1000,
            position: "top-right",
          });
          getData();
        } else {  
        }
        console.log(resp.data.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-center">Contact Page</h2>
      <table className="container table ">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Contact ? (
            Contact.map((data, index) => {
              return (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{data.name} </td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => handleDelete(data._id)}
                      value="Delete"
                      className="btn btn-danger"
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <h2>No data found</h2>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Dcontact;
