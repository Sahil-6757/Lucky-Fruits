import "./App.css";
import Navbar from "./components/Navbar";
import Crousel from "./components/Crousel";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./components/Login";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register";
import DNavbar from "./components/Dashboard/DNavbar";
import Dhome from "./components/Dashboard/Dhome";
import Ditem from "./components/Dashboard/Ditem";
import Dorder from "./components/Dashboard/Dorder";
import Dcontact from "./components/Dashboard/Dcontact";
import Duser from "./components/Dashboard/Duser";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Alert } from "@mui/material";
import Dsetting from "./components/Dashboard/Dsetting";

function App() {
  localStorage.setItem("login",false);
 

  return (
    <>
    
      <ToastContainer />
      <Auth0Provider
        domain="dev-q0ap243k5ammap53.us.auth0.com"
        clientId="MA063X0vQmLDi10oZoy7zwZRaW4lPJVA"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Navbar />
        <Routes>
          <Route Component={Crousel} index="/" />
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
          <Route Component={Cart} path="/cart" />
          <Route Component={Checkout} path="/checkout" />
          <Route Component={Dashboard} path="/Dashboard">
            <Route Component={Dhome} path="dHome" />
            <Route Component={Ditem} path="dItem" />
            <Route Component={Dorder} path="dOrder" />
            <Route Component={Dcontact} path="dContact" />
            <Route Component={Duser} path="dUser" />
            <Route Component={Dsetting} path="dSetting" />
          </Route>
        </Routes>
      </Auth0Provider>
    </>
  );
}

export default App;
