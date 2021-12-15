import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  CardContent,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";
import AddToCartModal from "../ShoppingCart/AddToCartModal/AddToCartModal";

const Products = ({ handleOpen, handleClose, open }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const useStyle = makeStyles({
    cardHover: {
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  });
  const { cardHover } = useStyle();
  return (
    <Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
        <Carousel ssr responsive={responsive}>
          {products?.map((product) => (
            <Box>
              <Card
                sx={{ maxWidth: 260, mb: 2 }}
                variant="outlined"
                className={cardHover}
              >
                <CardMedia component="img" height="260" image={product.img} />
                <CardContent>
                  <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                    Onisw dia vansi kanei
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      pt: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#fc6539",
                        }}
                      >
                        $80
                      </Typography>
                    </Box>
                    <Box>
                      <Button /* onClick={handleOpen} */ variant="outlined">
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
      <AddToCartModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </Container>
  );
};

export default Products;
