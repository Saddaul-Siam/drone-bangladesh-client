import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";
import { getStoredCart } from "../../../utilities/fakedb";

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

  return (
    <Container>
      <Root>
        <table style={{ minWidth: 500 }} aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Image</th>
              <th style={{ width: 400 }}>Product</th>
              <th style={{ width: 199 }}>Price</th>
              <th style={{ width: 600 }}>Quantity</th>
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
                <td style={{ width: 600 }}>{cart.quantity}</td>
                <td style={{ width: 199 }}>{cart.total}</td>
                <td style={{ width: 199 }}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Root>
    </Container>
  );
}
