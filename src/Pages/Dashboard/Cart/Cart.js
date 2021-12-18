import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  clearTheCart,
  getStoredCart,
  removeFromDb,
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
          My Order
        </Typography>
        <Root>
          <table style={{ minWidth: 500 }} aria-label="custom pagination table">
            <thead>
              <tr>
                <th>Image</th>
                <th style={{ width: 400 }}>Product</th>
                <th style={{ width: 199 }}>Price</th>
                <th style={{ width: 400 }}>Quantity</th>
                <th style={{ width: 199 }}>Total</th>
                <th style={{ width: 199 }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart._id}>
                  <td>
                    <img height="120px" width="100px" src={cart.img} alt="" />
                  </td>
                  <td style={{ width: 400 }}>{cart.name}</td>
                  <td style={{ width: 199 }}>$ {cart.price}</td>
                  <td style={{ width: 400 }}>{cart.quantity}</td>
                  <td style={{ width: 199 }}>$ {cart.total}</td>
                  <td style={{ width: 199 }}>
                    <Button
                      variant="text"
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
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button variant="contained">CONTINUE SHOPPING </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="contained">UPDATE CART</Button>
              <Button variant="contained" onClick={handleClearCart}>
                CLEAR CART
              </Button>
            </Grid>
          </Grid>
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
            <Button
              variant="contained"
              sx={{ mt: 3, align: "left" }}
              onClick={handleOrder}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
