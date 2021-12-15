import React from "react";
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
const Products = () => {
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
          <Box>
            <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
              <CardMedia
                component="img"
                height="260"
                image="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-2_4d1d91f8-cb04-4e5a-bc4d-2198d6e3ec90_large.jpg?v=1621479845"
                alt="Paella dish"
              />
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
                    <Button variant="outlined">Add to cart</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
           <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
            <CardMedia
              component="img"
              height="260"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/articles/drone-blog-1_600x400_crop_center.png?v=1620464459"
              alt="Paella dish"
            />
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
                  <Button variant="outlined">Add to cart</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
           <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
            <CardMedia
              component="img"
              height="260"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-1_large.jpg?v=1621479782"
              alt="Paella dish"
            />
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
                  <Button variant="outlined">Add to cart</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
           <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
            <CardMedia
              component="img"
              height="260"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-5_9eaffd1c-bd62-4516-847b-696535d476e0_large.jpg?v=1621479916"
              alt="Paella dish"
            />
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
                  <Button variant="outlined">Add to cart</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
           <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
            <CardMedia
              component="img"
              height="260"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-4_9b4f8403-741b-40b2-9bce-503569b7d797_large.jpg?v=1621479892"
            />
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
                  <Button variant="outlined">Add to cart</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
           <Card
              sx={{ maxWidth: 260, mb: 2 }}
              variant="outlined"
              className={cardHover}
            >
            <CardMedia
              component="img"
              height="260"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-8_eb34ce5a-d77e-4eac-83dc-8c19961cb877_large.jpg?v=1621482116"
            />
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
                  <Button variant="outlined">Add to cart</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Carousel>
      </Box>
    </Container>
  );
};

export default Products;
