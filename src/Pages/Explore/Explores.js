import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Explore from "./Explore";
import AddToCartModal from "../Home/ShoppingCart/AddToCartModal/AddToCartModal";
import Navigation from "../../Pages/Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Explores = ({ handleOpen, handleClose, open }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://glacial-earth-17759.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [productId, setProductId] = useState("");
  const handleClickAddToCard = (id) => {
    handleOpen();
    setProductId(id);
  };
  return (
    <>
      <Navigation />
      <Container sx={{ pt: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontWeight: 500, color: "#fc6539" }}
          >
            AWESOME PRODUCTS
          </Typography>
          <Typography
            sx={{ fontSize: "45px", fontWeight: 700, color: "#06264b" }}
          >
            Featured Products
          </Typography>
        </Box>
        <Box sx={{ my: 8 }}>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <Explore
                product={product}
                key={product._id}
                handleOpen={handleOpen}
                handleClickAddToCard={handleClickAddToCard}
              />
            ))}
          </Grid>

          <AddToCartModal
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            productId={productId}
          />
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default Explores;
