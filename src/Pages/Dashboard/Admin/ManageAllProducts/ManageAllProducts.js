import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import ManageAllProduct from "./ManageAllProduct";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://glacial-earth-17759.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <Container>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#FF1493",
          display: "flex",
          justifyContent: "center",
          py: 5,
        }}
        variant="h4"
      >
        Manage Products
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Product id</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {products.map((product) => (
            <ManageAllProduct
              key={product._id}
              product={product}
            ></ManageAllProduct>
          ))}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageAllProducts;
