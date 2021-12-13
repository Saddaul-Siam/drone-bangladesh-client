import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation,  useNavigate } from 'react-router-dom';
// import Navigation from '../../Shared/Navigation/Navigation';
import Divider from '@mui/material/Divider';
// import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../../Hooks/useAuth';
import PrimaryButton from '../../../../StyledComponent/MuiButton';
import Navigation from '../../../Shared/Navigation/Navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  let navigate = useNavigate();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  }

  return (
    <>
      <Navigation></Navigation>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard" />

              <PrimaryButton sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</PrimaryButton>
              <NavLink
                style={{ textDecoration: 'none' }}
                to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user.email && <Alert severity="success"> User login successful</Alert>}
              {authError && <Alert sx={{ width: '75%' }} severity="error">{authError}</Alert>}
            </form>
            <Divider sx={{ width: '75%', mt: 2 }} />
            <Divider sx={{ width: '75%' }} />
            <PrimaryButton sx={{ mt: 5, width: '75%' }} onClick={handleGoogleSignIn} variant="contained"><GoogleIcon /> <Typography sx={{ pl: 3 }}>Google sign In</Typography> </PrimaryButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: '100%' }} src="https://i.ibb.co/BGmC4DL/sign-concept-illustration-114360-5267.jpg" alt="" />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Login;