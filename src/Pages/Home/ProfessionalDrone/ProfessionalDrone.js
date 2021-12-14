import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const ProfessionalDrone = () => {
  const useStyle = makeStyles({
    background: {
      background: ` linear-gradient(#FFFAEF,#fff7e6)`,
      // height: "90vh",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  });
  const { background } = useStyle();
  return (
    <Box className={background} sx={{ my: 10 }}>
      <Box
        sx={{
          // height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
        }}
      >
        <img
          width="100%"
          height=""
          src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/lookbook_931ea622-bb88-427c-bdad-7c9e2d1701a5.png?v=1619256333"
          alt=""
        />
        <br />
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: "50px", fontWeight: 500, fontSize: "13px" }}
        >
          + See Details
        </Button>
      </Box>
    </Box>
  );
};

export default ProfessionalDrone;
