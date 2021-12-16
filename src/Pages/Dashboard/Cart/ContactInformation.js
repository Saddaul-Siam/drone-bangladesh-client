import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const ContactInformation = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data._id = orders._id;
    console.log(data);
    fetch("http://localhost:5000/order", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
              Shipping address
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", mb: 3, backgroundColor: "#fff" }}
                name="email"
                variant="outlined"
                label="EMAIL"
                {...register("orderEmail")}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="name"
                    id="outlined-basic"
                    variant="outlined"
                    label="YOUR NAME"
                    {...register("orderName")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="outlined-basic"
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="phone"
                    variant="outlined"
                    label="PHONE NUMBER"
                    {...register("orderPhone")}
                  />
                </Grid>
              </Grid>

              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", my: 3, backgroundColor: "#fff" }}
                name="subject"
                variant="outlined"
                label="Address"
                {...register("orderAddress")}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="name"
                    id="outlined-basic"
                    variant="outlined"
                    label="City"
                    {...register("orderCity")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="outlined-basic"
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="phone"
                    variant="outlined"
                    label="Postal code"
                    {...register("orderPostalCode")}
                  />
                </Grid>
              </Grid>
              <br />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button sx={{ fontSize: "12px" }} variant="text" size="small">
                  Return to cart
                </Button>
                <Button
                  type="submit"
                  sx={{ my: 3, py: 1, borderRadius: "50px" }}
                  variant="contained"
                >
                  Continue to shipping
                </Button>
                <Button sx={{ fontSize: "12px" }} variant="text" size="small">
                  Cancle shipping
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CartDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactInformation;
