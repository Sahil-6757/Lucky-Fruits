import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const navigation = useNavigate();
  const [Login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // async function getData() {
  //   axios.get("http://localhost:8000").then((resp) => {
  //     console.log(resp.data);
  //   });
  // }
  const loginBtn = (e) => {
    e.preventDefault();
    if (!(formData.email && formData.password)) {
      toast.warn("Fields are empty", {
        autoClose: 1000,
        pauseOnFocusLoss: false,
      });
    } else {
      axios
        .post("http://localhost:8000/login", formData)
        .then((resp) => {
          let result = resp.data.message;
          if (result === "login Success") {
            toast.success("Login Success", {
              position: "top-center",
              autoClose: 1000,
            });
            navigation("/");
          } else if (result === "Admin login Success") {
            toast.success("Admin", {
              position: "top-center",
              autoClose: 1000,
            });
            setLogin(true);
            localStorage.setItem("login", Login);
            navigation("/Dashboard");
          } else {
            toast.error("Invalid Username and Password", {
              position: "top-center",
              autoClose: 1000,
            });
          }
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {/* <Auth0Provider
    domain="dev-q0ap243k5ammap53.us.auth0.com"
    clientId="MA063X0vQmLDi10oZoy7zwZRaW4lPJVA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <button onClick={() => loginWithRedirect()}>Log In</button>

  </Auth0Provider> */}

      <div className="login-form container">
        <form action="" method="post">
          <div className="login">
            {" "}
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control my-3"
              required
              name="password"
              onChange={handleChange}
              id="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="btn btn-success"
              onClick={loginBtn}
            >
              Login
            </button>
            <Link
              to="/register"
              style={{ backgroundColor: "#D7DBD4" }}
              className="register-btn btn  mx-3"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
