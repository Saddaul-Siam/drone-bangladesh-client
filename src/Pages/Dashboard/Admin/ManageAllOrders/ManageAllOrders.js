import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const Swal = require("sweetalert2");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: " The customer paid for it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: " Order remove successful",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            }
          });
      }
    });
  };
  return (
    <Container>
      {orders.map((order) => (
        <Paper sx={{ my: 3, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
            <Typography>
              Order <span style={{ color: "orange" }}># {order._id}</span>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleDeleteOrder(order._id)}
            >
              Remove Order
            </Button>
          </Box>
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

export default ManageAllOrders;
