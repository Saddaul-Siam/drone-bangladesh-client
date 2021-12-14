import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Feature = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={7}>
        <Grid item xs={12} md={3}>
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
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/tJW9FZh/microphone.webp"
                alt="microphone"
                border="0"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>HD Microphone</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/4PDMkr9/power-bank.webp"
                alt="power-bank"
                border="0"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>Power Bank</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.ibb.co/sJM97XF/micro-sd-card.webp"
                alt="micro-sd-card"
                border="0"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>Memory Card</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feature;
/* 
<a href="https://imgbb.com/"></a>
<a href="https://imgbb.com/"></a>
<a href="https://imgbb.com/"></a>
*/
