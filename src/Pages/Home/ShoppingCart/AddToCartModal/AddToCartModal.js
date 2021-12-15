import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 888,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddToCartModal = (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${props?.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [props?.productId]);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Grid container spacing={5}>
              <Grid item xs={6} md={6}>
                <img width="100%" height="400px" src={product?.img} alt="" />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                  {product?.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 600, color: "#fc6539" }}
                >
                  {product?.price}
                </Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 2 }}>
                  {product?.description}
                </Typography>
                <Button variant="outlined">Add to cart</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
