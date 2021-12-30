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
  const Swal = require("sweetalert2");
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
    const quantity = document.getElementById("cartNumber");
    addToDb(product._id, quantity.value);

    props.handleClose();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add to cart successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateProductNumber = (isIncreasing) => {
    const productInput = document.getElementById("cartNumber");
    let productNumber = productInput.value;
    if (isIncreasing === true) {
      productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
  };

  const cartPlus = () => {
    updateProductNumber(true);
  };

  const cartMinus = () => {
    updateProductNumber(false);
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                    textAlign: "start",
                  }}
                >
                  <Box sx={{ border: "1px solid gray", py: 1, mr: 5 }}>
                    <Button onClick={cartMinus}>
                      <i class="fas fa-minus"></i>
                    </Button>
                    <input
                      id="cartNumber"
                      type="number"
                      min="0"
                      defaultValue="1"
                      style={{
                        width: "65px",
                        padding: "5px",
                        textAlign: "center",
                        fontSize: "18px",
                        border: 0,
                      }}
                    />
                    <Button onClick={cartPlus}>
                      <i class="fas fa-plus"></i>
                    </Button>
                  </Box>
                  {user.email ? (
                    <Button onClick={handleAddToCart} variant="outlined">
                      Add to cart
                    </Button>
                  ) : (
                    <Navigate to="/login" state={{ from: location }} />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
