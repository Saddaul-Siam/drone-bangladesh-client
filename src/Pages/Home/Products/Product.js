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
  const { handleClickAddToCard, product } = props;
  const { name, img, price, _id } = product;
  const useStyle = makeStyles({
    cardHover: {
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  });
  const { cardHover } = useStyle();

  return (
    <Box>
      <Card
        sx={{ maxWidth: 260, mb: 2 }}
        variant="outlined"
        className={cardHover}
      >
        <CardMedia component="img" height="260" image={img} />
        <CardContent>
          <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
            {name}
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
                $ {price}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => handleClickAddToCard(_id)}
                variant="outlined"
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Product;
