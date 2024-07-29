import React, { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { Link, json } from "react-router-dom";

function Cart() {
  const [Items, setItems] = useState([]);

  async function getData() {
    const item = await JSON.parse(localStorage.getItem("Items"));
    setItems(item);
  }

  useEffect(() => {
    getData();
  }, []);

  const removeBtn = (index) => {
    const newItems = Items.filter((_, i) => i !== index);
    localStorage.setItem("Items", JSON.stringify(newItems));
    setItems(newItems);
    getData();
  };
  const handleCheckout = () => {
    if (Items.length > 0) {
      console.log("present");
    } else {
      console.log("Absent");
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="cart-container">
            <div className="header">
              <h2 className="text-center text-success">Cart </h2>
            </div>

            <hr />
            {Items == null ? (
              <p className="text-center">No Data Found</p>
            ) : (
              Items.map((value, index) => {
                return (
                  <div className="cart-items my-2">
                    <div className="cart-image">
                      <img
                        src={require(`../components/Dashboard/images/${value.image}`)}
                        style={{ height: "12rem", width: "12rem" }}
                        alt="image"
                      />
                    </div>
                    <div className="cart-description">
                      <h4 className="px-2">{value.name}</h4>
                      <p className="px-2">{value.description}</p>
                    </div>
                    <div className="cart-price">
                      <p className="px-2">{value.rate}</p>
                    </div>
                    <div className="cart-remove-btn">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeBtn(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            <hr />

            <div className="checkout-btn">
              {Items == null ? (
                ''
              ) : (
                <Link
                  to={"/checkout"}
                  className="btn btn-success"
                  disabled={Items.length > 0 ? false : true}
                  onClick={handleCheckout}
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
