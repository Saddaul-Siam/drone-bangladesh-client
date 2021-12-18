import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const DashboardHome = () => {
  const { admin, user } = useAuth();
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FF1493",
          display: "flex",
          justifyContent: "center",
          py: 3,
        }}
      >
        Dashboard Home{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {admin ? (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#FF1493", pt: 10 }}
            >
              H! Admin
            </Typography>
          ) : (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#FF1493", pt: 10 }}
            >
              H! {user.displayName}
            </Typography>
          )}

          <Typography variant="h4" sx={{ fontWeight: "bold", pt: 10 }}>
            Welcome to the Dashboard Home
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src="https://i.ibb.co/QCCkQT7/setup-analytics-concept-illustration-114360-1438.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;
