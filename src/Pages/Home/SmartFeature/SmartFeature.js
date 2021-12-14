import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
const SmartFeature = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/with-the-help.png?v=1620291827"
              alt=""
            />
          </Box>
        </Grid>
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
                fontSize: "45px",
                fontWeight: 700,
                lineHeight: "60px",
                fontFamily: "Playfair Display, serif",
                py: 3,
              }}
            >
              Smart Feature with help
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </Typography>
            <Box sx={{ display: "flex", pb: 2, pt: 4 }}>
              <Box>
                <img
                  width="80px"
                  src="https://i.ibb.co/yNhm62W/wifi.webp"
                  alt="wifi"
                  border="0"
                />
              </Box>
              <Box sx={{ pl: 3 }}>
                <Typography>Connectivity</Typography>
                <Typography>
                  Receive incoming calls or speed dial contacts without reaching
                  aniesn.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", py: 2 }}>
              <Box>
                <img
                  src="https://i.ibb.co/tJW9FZh/microphone.webp"
                  alt="microphone"
                  border="0"
                />
              </Box>
              <Box sx={{ pl: 3 }}>
                <Typography>Voice Control</Typography>
                <Typography>
                  Calls & Calendar management personal contacts without reaching
                  edfes.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", py: 2 }}>
              <Box>
                <img
                  src="https://i.ibb.co/sJM97XF/micro-sd-card.webp"
                  alt="micro-sd-card"
                  border="0"
                />
              </Box>
              <Box sx={{ pl: 3 }}>
                <Typography>Data Storage</Typography>
                <Typography>
                  Controls management personal contacts without reaching phones
                  wfers.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SmartFeature;
