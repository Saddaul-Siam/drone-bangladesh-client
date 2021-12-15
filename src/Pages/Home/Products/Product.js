import React from "react";
import {
  Typography,
  Box,
  CardContent,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
 const Product = (props) => {
  // const { handleOpen, product } = props;
  // const { name, img, description, price, _id } = props?.product;
  const useStyle = makeStyles({
    cardHover: {
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  });
  const { cardHover } = useStyle();
  return (
    <Card
      sx={{ maxWidth: 260, mb: 2 }}
      variant="outlined"
      className={cardHover}
    >
      <CardMedia
        component="img"
        height="260"
        image={props?.product?.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
          {props?.product?.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fc6539",
              }}
            >
              {props?.product?.price}
            </Typography>
          </Box>
          <Box>
            <Button /* onClick={handleOpen} */ variant="outlined">
              Add to cart
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
