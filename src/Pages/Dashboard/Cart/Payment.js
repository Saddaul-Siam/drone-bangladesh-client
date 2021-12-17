import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51K7XyvJKxcqmkg6L2nlek1vfb9SzEHP7sfruW01atdpByP9gzMRBXimosUx4Zje2JXzodQI0Inpvz0ZK7zLPEGB900ZSL5N3K7"
);

const Payment = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);
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
            <Box sx={{ border: 1, mt: 3, p: 1 }}>
              <Typography variant="body1" sx={{ borderBottom: 1, py: 1 }}>
                Contact: {orders.orderPhone}
              </Typography>
              <Typography variant="body1" sx={{ py: 1 }}>
                Ship to: {orders.orderAddress} {orders.orderCity}
                {orders.orderPostalCode}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ py: 3 }}>
              Payment
            </Typography>
            <Typography variant="p" sx={{ py: 3 }}>
              Payment Coming Soon
            </Typography>
            {orders?.totalShoppingCost && (
              <Elements stripe={stripePromise}>
                <CheckOutForm orders={orders} id={id} />
              </Elements>
            )}
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
