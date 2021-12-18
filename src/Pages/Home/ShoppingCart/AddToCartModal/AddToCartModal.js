import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { addToDb } from "../../../../utilities/fakedb";

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
  const { user } = useAuth();
  const location = useLocation();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(
      `https://glacial-earth-17759.herokuapp.com/product/${props?.productId}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [props?.productId]);

  const handleAddToCart = () => {
    addToDb(product._id);

    alert("Products add to cart successfully");
  };

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
                {user.email ? (
                  <Button onClick={handleAddToCart} variant="outlined">
                    Add to cart
                  </Button>
                ) : (
                  <Navigate to="/login" state={{ from: location }} />
                )}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
