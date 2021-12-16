import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { Button, Container, Grid } from "@mui/material";
import {
  clearTheCart,
  getStoredCart,
  removeFromDb,
} from "../../../utilities/fakedb";
import { Link } from "react-router-dom";

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
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  console.log(carts);
  useEffect(() => {
    fetch("http://localhost:5000/products")
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
  const handleClearCart = () => {
    clearTheCart();
    window.location.reload();
  };
  const handleRemoveCart = (id) => {
    removeFromDb(id);
    window.location.reload();
  };
  return (
    <Container>
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
                <td style={{ width: 199 }}>{cart.price}</td>
                <td style={{ width: 400}}>{cart.quantity}</td>
                <td style={{ width: 199 }}>{cart.total}</td>
                <td style={{ width: 199 }}>
                  <Button
                    variant="text"
                    onClick={() => handleRemoveCart(cart._id)}
                  >
                    X
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
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
    </Container>
  );
}
