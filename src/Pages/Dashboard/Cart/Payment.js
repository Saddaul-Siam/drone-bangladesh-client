import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import useAuth from "../../../Hooks/useAuth";

const Payment = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState({});
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos="zoom-in"
        >
          <Paper sx={{ p: 3 }} elevation={1}>
            <Typography variant="h4" sx={{ pt: 3 }}>
              Drone bangladesh
            </Typography>
            <Typography variant="h6" sx={{ py: 3 }}>
              Contact: {orders.orderEmail} {orders.orderPhone}
            </Typography>
            <Typography variant="h6" sx={{ py: 3 }}>
              Ship to: {orders.orderAddress} {orders.orderCity}{" "}
              {orders.orderPostalCode}
            </Typography>
            <Typography variant="h6" sx={{ py: 3 }}>
              Payment
            </Typography>
            <Typography variant="p" sx={{ py: 3 }}>
              Payment Coming Soon
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CartDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
