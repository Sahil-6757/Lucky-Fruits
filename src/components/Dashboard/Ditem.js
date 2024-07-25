import { useEffect, useState } from "react";
import React from "react";
import "./Dashboard.css";
import axios from "axios";
import { toast } from "react-toastify";

function Ditem() {
  const [Name, setName] = useState("");
  const [Description, setDescrition] = useState("");
  const [Rate, setRate] = useState("");
  const [File, setFile] = useState();
  const [Data, setData] = useState([]);
  const [Id, setId] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescrition(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleFile = async (e) => {
    await setFile(e.target.files[0]);
  };

  const getData = async () => {
    await axios.get("http://localhost:8000/item").then((resp) => {
      setData(resp.data);
    });
  };
  const formData = new FormData();
  formData.append("name", Name);
  formData.append("description", Description);
  formData.append("rate", Rate);
  formData.append("image", File);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let name = document.getElementById("name").value;
      let description = document.getElementById("description").value;
      let rate = document.getElementById("rate").value;
      let image = document.getElementById("image").value;
      if (!(name, description, rate, image)) {
        toast.error("Empty fields", {
          autoClose: 2000,
        });
      } else {
        await axios.post("http://localhost:8000/item", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setInterval(async () => {
          await getData();
        }, 2000);
        toast.success("Item added Successfully", {
          autoClose: 2000,
        });
        setName("");
        setDescrition("");
        setRate("");
        setFile("");
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("rate").value = "";
        document.getElementById("image").value = "";
      }
    } catch (error) {
      console.log("An Error Occurs" + error);
    }
  };

  const handleUpdate = async () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let rate = document.getElementById("rate").value;
    let image = document.getElementById("image").value;
    if (!(name, description, rate, image)) {
      toast.error("Empty fields", {
        autoClose: 2000,
      });
    } else {
      axios
        .put(`http://localhost:8000/edititem/${Id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

        .then((resp) => {
          console.log(resp.data);
          toast.success("Updated Succssfully", {
            autoClose: 1000,
            position: "top-center",
          });
          document.getElementById("name").value = "";
          document.getElementById("description").value = "";
          document.getElementById("rate").value = "";
          document.getElementById("image").value = "";
        });
    }
  };

  const handleEdit = async (id, name, description, rate, image) => {
    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("rate").value = rate;
    setId(id);
  };

  const handleDelete = async (id) => {
    console.log(id);

    axios
      .delete(`http://localhost:8000/deleteitem/${id}`)
      .then(async (resp) => {});
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit} method="post">
        <div className="item-page">
          <div className="item-form">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={handleName}
                className="form-control"
                name="name"
                id="name"
                placeholder="Item Name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="3"
                onChange={handleDescription}
                placeholder="Item Description"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Rate
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleRate}
                name="rate"
                id="rate"
                placeholder="Item Rate"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                name="image"
                accept=".jpg"
                onChange={handleFile}
                id="image"
              />
            </div>
            <input type="submit" value="Post" className="btn btn-success " />
            <input
              type="button"
              value="Update"
              onClick={handleUpdate}
              className="btn btn-secondary mx-3"
            />
          </div>
        </div>
      </form>

      <div className="container">
        <h2 className="text-center text-success">Item Records</h2>
        <div className="row">
          {Data.length < 0 ? (
            <p>No Data Found</p>
          ) : (
            Data.map((value, index) => {
              // console.log(value);
              return (
                <>
                  {index < 0 ? (
                    <p>No item Found</p>
                  ) : (
                    <div className="col-md-4">
                      <div
                        className="card my-2"
                        key={value.image}
                        style={{ width: "20rem", height: "auto" }}
                      >
                        <img
                          src={require(`../Dashboard/images/${value.image}`)}
                          alt={value.image}
                          style={{ height: "15rem" }}
                        />

                        <div className="card-body">
                          <h5 className="card-title text-center">
                            {value.name}
                          </h5>
                          <p className="card-text text-center">
                            {value.description}
                          </p>
                          <p className="card-text text-center ">{value.rate}</p>
                          <div className="buttonElement">
                            <button
                              href="#"
                              className="btn btn-primary m-auto"
                              onClick={() =>
                                handleEdit(
                                  value._id,
                                  value.name,
                                  value.description,
                                  value.rate,
                                  value.image
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              href="#"
                              className="btn btn-danger m-auto"
                              onClick={() => handleDelete(value._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <img src={`data:${value.image.contentType};base64,${Buffer.from(value.image.data).toString('base64')}`} alt={value.image.data} style={{height:"23px", width:"23px"}}/> */}
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Ditem;
