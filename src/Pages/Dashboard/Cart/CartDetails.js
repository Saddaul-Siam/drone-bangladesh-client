import { Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const CartDetails = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState({});
  const { order } = orders;
  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  let totalShoppingCost = 0;
  for (const product in order) {
    if (Object.hasOwnProperty.call(order, product)) {
      const element = order[product];
      totalShoppingCost = totalShoppingCost + element.total;
    }
  }
  return (
    <Box sx={{ p: 5, width: "450px" }}>
      {orders?.order?.map((order) => (
        <Box
          key={order._id}
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Badge badgeContent={order.quantity} color="error">
                <img width="100px" height="100px" src={order.img} alt="" />{" "}
              </Badge>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: "16px", pl: 3 }}>
                {order.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
              $ {order.total}
            </Typography>
          </Box>
        </Box>
      ))}
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            Subtotal
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            $ {totalShoppingCost}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            Shipping
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            $ 0.00
          </Typography>
        </Box>
      </Box>
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            Total
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
            USD $ {totalShoppingCost}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartDetails;
