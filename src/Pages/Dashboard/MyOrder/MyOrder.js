import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  // console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  return (
    <Container>
      {orders.map((order) => (
        <Paper sx={{ my: 3, p: 2 }}>
          <Typography>
            Order <span style={{ color: "orange" }}># {order._id}</span>
          </Typography>
          {order.order.map((od) => (
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              <img width="100px" src={od.img} alt="" />
              <Typography>{od.name}</Typography>
              <Typography>Qty: {od.quantity}</Typography>
              <Typography sx={{}}>
                <span
                  style={{
                    background: "#EFF0F5",
                    padding: "5px 8px",
                    borderRadius: "50px",
                  }}
                >
                  {order.status}
                </span>
              </Typography>
              <Typography>{order.payment && "Paid"}</Typography>
            </Box>
          ))}
        </Paper>
      ))}
    </Container>
  );
};

export default MyOrder;
