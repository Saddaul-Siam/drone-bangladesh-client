import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LatestBlog = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default LatestBlog;
