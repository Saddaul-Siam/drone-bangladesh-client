import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import PrimaryButton from "../../../../StyledComponent/MuiButton";
import Navigation from "../../../Shared/Navigation/Navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Register
            </Typography>
            {
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <FormControl sx={{ m: 1, width: "75%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onBlur={handleOnBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          {showPassword ? (
                            <Visibility
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <VisibilityOff
                              onClick={() => setShowPassword(true)}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "75%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password2"
                    onBlur={handleOnBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          {showPassword ? (
                            <Visibility
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <VisibilityOff
                              onClick={() => setShowPassword(true)}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <PrimaryButton
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </PrimaryButton>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            }
            {isLoading && <CircularProgress />}
            {user.email && (
              <Alert severity="success"> User account create successful</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/ctvRFVc/mobile-login-concept-illustration-114360-83.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
