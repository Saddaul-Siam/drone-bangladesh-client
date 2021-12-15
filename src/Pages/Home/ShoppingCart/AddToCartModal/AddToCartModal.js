import * as React from "react";
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

const AddToCartModal = ({ handleClose, open, productId }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={5}>
              <Grid item xs={6} md={6}>
                <img
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0111/9135/3402/products/products-5_9eaffd1c-bd62-4516-847b-696535d476e0.jpg?v=1621479916"
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                  Catin uofessor eampden
                </Typography>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 600, color: "#fc6539" }}
                >
                  $79.00
                </Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 2 }}>
                  we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  bel...
                </Typography>
                <Button variant="outlined">Add to cart</Button>
                {productId}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
