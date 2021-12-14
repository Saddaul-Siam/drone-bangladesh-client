import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

const LatestBlog = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  return (
    <Container sx={{ py: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ color: "#fc6539", fontSize: "18px", fontWeight: 500 }}
        >
          FEATURED BLOGS
        </Typography>
        <Typography
          sx={{
            color: "#06264b",
            fontSize: "45px",
            fontWeight: 700,
            fontFamily: "Playfair Display, serif",
          }}
        >
          Latest Featured Blog
        </Typography>
      </Box>
      <Box>
        <Carousel
          ssr
          // partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/GTc9fcz/game-controller-d17d0c81-03d0-4796-a48d-ef51e972a137.webp"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>
                Remote Control
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/GTc9fcz/game-controller-d17d0c81-03d0-4796-a48d-ef51e972a137.webp"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>
                Remote Control
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/GTc9fcz/game-controller-d17d0c81-03d0-4796-a48d-ef51e972a137.webp"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>
                Remote Control
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/GTc9fcz/game-controller-d17d0c81-03d0-4796-a48d-ef51e972a137.webp"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>
                Remote Control
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
        </Carousel>
      </Box>
    </Container>
  );
};

export default LatestBlog;
