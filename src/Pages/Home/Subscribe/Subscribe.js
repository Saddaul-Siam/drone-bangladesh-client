import { Button, Container, Box, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Subscribe = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    input: {
      [theme.breakpoints.down("md")]: {
        width: "180px !important",
      },
    },
    button: {
      [theme.breakpoints.down("md")]: {
        padding: "10px 20px !important",
      },
    },
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

  const { input, button, title } = useStyle();
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
          className={title}
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
            className={input}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              outline: "none",
              width: "60vh",
              backgroundColor: "#e6e6e6",
              fontSize: "18px",
            }}
            type="email"
            placeholder="Your email address"
          />
          <Button
            variant="contained"
            className={button}
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
