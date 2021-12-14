import { Button, Container, Box, Typography } from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ color: "#fc6539", fontWeight: 500, fontSize: "18px" }}
        >
          SUBSCRIBE AREA
        </Typography>
        <Typography
          sx={{
            color: "#06264b",
            fontWeight: 700,
            fontSize: "45px",
            fontFamily: "Playfair Display, serif",
            pb: 8,
          }}
        >
          FOR LATEST NEWS
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            border: "1px solid #808080",
            borderRadius: "50px",
            display: "inline-block",
            backgroundColor: "#e6e6e6",
          }}
        >
          <input
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              outline: "none",
              width: "700px",
              backgroundColor: "#e6e6e6",
              fontSize: "18px",
            }}
            type="email"
            placeholder="Your email address"
          />
          <Button
            variant="contained"
            sx={{ py: 1.6, px: 4, borderRadius: "50px", fontSize: "16px" }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Subscribe;
