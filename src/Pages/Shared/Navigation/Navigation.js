import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";
import { Badge, Button, Container, Fab, Zoom } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import PrimaryButton from "../../../StyledComponent/MuiButton";
import useAuth from "../../../Hooks/useAuth";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { getStoredCart } from "../../../utilities/fakedb";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navigation = (props) => {
  const saveCart = getStoredCart();
  const [qut, setQut] = useState();
  useEffect(() => {
    let quantity = 0;
    for (const key in saveCart) {
      quantity += parseInt(saveCart[key]);
    }
    setQut(quantity);
  }, [saveCart]);

  const useStyle = makeStyles({
    navbarColor: {
      backgroundColor: "#303030 !important",
      padding: "5px 0",
    },
  });
  const { navbarColor } = useStyle();
  const { user, logOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {user?.email && (
          <MenuItem onClick={handleMenuClose}>{user.displayName}</MenuItem>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {user?.email && (
          <MenuItem onClick={handleMenuClose}>{user.email}</MenuItem>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {user?.email && (
          <MenuItem onClick={handleMenuClose}>
            <PrimaryButton color="primary" onClick={logOut}>
              Log Out
            </PrimaryButton>
          </MenuItem>
        )}
      </Box>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user.email && (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {user.photoURL ? (
              <Avatar alt="profile" src={user?.photoURL} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
          <span>Profile</span>
        </MenuItem>
      )}
      {user.email && (
        <MenuItem>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/dashboard/cart"
          >
            <Button color="inherit">
              <IconButton size="large">
                <Badge badgeContent={`${qut}`} color="error">
                  <LocalMallIcon />{" "}
                </Badge>
              </IconButton>
            </Button>
          </Link>
        </MenuItem>
      )}
      <MenuItem>
        <Link style={{ textDecoration: "none", color: "black" }} to="/home">
          <Button color="inherit">Home</Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: "none", color: "black" }} to="/explore">
          <Button color="inherit">Explore</Button>
        </Link>
      </MenuItem>

      {user?.email && (
        <MenuItem>
          {" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/dashboard"
          >
            <Button color="inherit">Dashboard</Button>
          </Link>{" "}
        </MenuItem>
      )}

      {user.email ? (
        ""
      ) : (
        <MenuItem>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar className={navbarColor}>
          <Container>
            <Toolbar sx={{ p: "0 !important" }}>
              <Typography variant="h6" noWrap component="div">
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                >
                  DRONE BANGLADESH
                </NavLink>
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button color="primary">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/home"
                  >
                    Home
                  </Link>
                </Button>
                <Button color="primary">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/explore"
                  >
                    Explore
                  </Link>
                </Button>
                {user?.email && (
                  <Button color="primary">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </Button>
                )}
                {user.email ? (
                  ""
                ) : (
                  <Button color="primary">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>
                )}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/dashboard/cart"
                >
                  <Button color="inherit">
                    <IconButton size="large" color="inherit">
                      <Badge badgeContent={`${qut}`} color="error">
                        <LocalMallIcon />{" "}
                      </Badge>
                    </IconButton>
                  </Button>
                </Link>

                {user.email && (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    {user.photoURL ? (
                      <Avatar alt="profile" src={user?.photoURL} />
                    ) : (
                      <AccountCircle />
                    )}
                  </IconButton>
                )}
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab
          sx={{ background: "#FF3987", color: "#FFFFFF" }}
          color="primary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default Navigation;
