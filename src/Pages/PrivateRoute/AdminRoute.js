import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else if (!admin) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else if (user.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
