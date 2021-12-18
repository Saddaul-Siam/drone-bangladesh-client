import React from "react";
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";
const FeaturedProduct = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    title: {
      [theme.breakpoints.down("md")]: {
        fontSize: "35px !important",
        fontFamily: "Playfair Display !important",
        fontWeight: "700px !important",
        color: "#06264b !important",
        lineHeight: "70px !important",
      },
    },
  });

  const { title } = useStyle();
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#fc6539",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              #FEATURED PRODUCT
            </Typography>
            <Typography
              sx={{
                fontSize: "45px",
                fontWeight: 700,
                lineHeight: "60px",
                fontFamily: "Playfair Display, serif",
                py: 3,
              }}
              className={title}
            >
              Minimal drone for music video lover
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. sint occaecaExcepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
            </Typography>
            <Button
              color="info"
              variant="contained"
              sx={{ mt: 5, borderRadius: "50px", px: 5, py: 2 }}
            >
              Buy Now <ShoppingCartIcon sx={{ pl: 3 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/FEATURED-PRODUCT_3893cb62-c0a4-49ec-98ae-bc3b23232153.png?v=1620291240"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedProduct;
