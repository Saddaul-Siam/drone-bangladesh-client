import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  clearTheCart,
  getStoredCart,
  removeFromDb,
  updateDB,
} from "../../../utilities/fakedb";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f6f6f6;
  }
`;

export default function Cart() {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://glacial-earth-17759.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCarts(storedCart);
    }
  }, [products]);

  for (const product of carts) {
    const total = parseInt(product.price) * parseInt(product.quantity);
    product.total = total;
  }

  let totalShoppingCost = 0;
  for (const product of carts) {
    totalShoppingCost = totalShoppingCost + product.total;
  }
  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Clear The Cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearTheCart();
        window.location.reload();
      }
    });
  };
  const handleRemoveCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Remove The Cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromDb(id);
        window.location.reload();
      }
    });
  };
  const handleOrder = () => {
    const order = {};
    order.user = user.displayName;
    order.email = user.email;
    order.order = carts;
    order.status = "pending";
    fetch("https://glacial-earth-17759.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          navigate(`/contactInformation/${data.insertedId}`);
        }
      });
  };
  const handleAddToCart = (id) => {
    const quantity = document.getElementById("cartNumber");
    updateDB(id, quantity.value);

    window.location.reload();
  };
  const updateProductNumber = (isIncreasing) => {
    const productInput = document.getElementById("cartNumber");
    let productNumber = productInput.value;
    if (isIncreasing === true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
  };

  const cartPlus = () => {
    updateProductNumber(true);
  };

  const cartMinus = () => {
    updateProductNumber(false);
  };
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF1493",
            display: "flex",
            justifyContent: "center",
            py: 3,
          }}
        >
          My Cart
        </Typography>
        <Root>
          <table style={{ minWidth: 500 }} aria-label="custom pagination table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Image</th>
                <th style={{ width: 400, textAlign: "center" }}>Product</th>
                <th style={{ width: 199, textAlign: "center" }}>Price</th>
                <th style={{ width: 400, textAlign: "center" }}>Quantity</th>
                <th style={{ width: 199, textAlign: "center" }}>Total</th>
                <th style={{ width: 199, textAlign: "center" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart._id}>
                  <td>
                    <img height="120px" width="100px" src={cart.img} alt="" />
                  </td>
                  <td style={{ width: 400, textAlign: "center" }}>
                    {cart.name}
                  </td>
                  <td style={{ width: 199, textAlign: "center" }}>
                    $ {cart.price}
                  </td>
                  <td style={{ width: 400, textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "start",
                      }}
                    >
                      <Box sx={{ border: "1px solid gray", mr: 2 }}>
                        <Button onClick={cartMinus}>
                          <i class="fas fa-minus"></i>
                        </Button>
                        <input
                          id="cartNumber"
                          type="number"
                          min="0"
                          defaultValue={cart.quantity}
                          style={{
                            width: "60px",
                            padding: "5px",
                            textAlign: "center",
                            fontSize: "18px",
                            border: 0,
                          }}
                        />
                        <Button onClick={cartPlus}>
                          <i class="fas fa-plus"></i>
                        </Button>
                      </Box>
                      <Button
                        onClick={() => handleAddToCart(cart._id)}
                        variant="outlined"
                      >
                        Update
                      </Button>
                    </Box>
                  </td>
                  <td style={{ width: 199, textAlign: "center" }}>
                    $ {cart.total}
                  </td>
                  <td style={{ width: 199, textAlign: "center" }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleRemoveCart(cart._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Root>
        <Box sx={{ pt: 3, display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/explore"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button variant="contained">CONTINUE SHOPPING </Button>
          </Link>
          <Button variant="contained" onClick={handleClearCart}>
            CLEAR CART
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "500px",
              background: "#F5F5F5",
              mt: 5,
              p: 4,
              pr: 6,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 24, pb: 3 }}>
              Cart Totals
            </Typography>
            <Grid container spacing={2} sx={{ mx: 0 }}>
              <Grid item xs={6} sx={{ border: 1, p: 1 }}>
                <Typography variant="h5">Subtotal</Typography>
              </Grid>
              <Grid item xs={6} sx={{ border: 1, borderLeft: 0, p: 1 }}>
                <Typography variant="h5">$ {totalShoppingCost}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ border: 1, borderTop: 0, p: 1 }}>
                <Typography variant="h5">Total</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ border: 1, borderTop: 0, borderLeft: 0, p: 1 }}
              >
                <Typography variant="h5">$ {totalShoppingCost}</Typography>
              </Grid>
            </Grid>
            {carts.length ? (
              <Button
                variant="contained"
                sx={{ mt: 3, align: "left" }}
                onClick={handleOrder}
              >
                Proceed to Checkout
              </Button>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
