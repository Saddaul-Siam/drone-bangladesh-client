import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Banner.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {
  const theme = useTheme();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const useStyle = makeStyles({
    background: {
      background: `url("https://i.ibb.co/z7sHzKb/Screenshot-2021-12-14-110941.png")`,
      height: "80vh",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    bannerTitle: {
      [theme.breakpoints.down("md")]: {
        fontSize: "48px !important",
        fontFamily: "Playfair Display !important",
        fontWeight: "700px !important",
        color: "#06264b !important",
        lineHeight: "70px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontFamily: "Playfair Display !important",
        fontSize: "125px !important",
        fontWeight: "700px !important",
        color: "#06264b !important",
        lineHeight: "125px !important",
      },
    },
    bannerText: {
      fontSize: "16px !important",
    },
    bannerContainer: {
      [theme.breakpoints.down("md")]: {
        padding: "0px 20px !important",
      },
    },
  });

  const { background, bannerTitle, bannerText, bannerContainer } = useStyle();

  return (
    <Box sx={{ height: "100hv", pt: 10 }} id="back-to-top">
      <Swiper
        pagination={pagination}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
      >
        <SwiperSlide>
          <Box className={background}>
            <Grid container spacing={5}>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box sx={{ pl: 15 }} className={bannerContainer}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#fc6539",
                      fontSize: "24px",
                      lineHeight: "25px",
                      marginBottom: "10px",
                    }}
                    className={bannerText}
                  >
                    #A Drone is a Portable
                  </Typography>
                  <Typography className={bannerTitle}>
                    Minimal <br /> Drone
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#06264b",
                      fontSize: "18px",
                      lineHeight: "30px",
                      marginTop: "20px",
                    }}
                    className={bannerText}
                  >
                    Experience the decibels like your ears deserve to. Safe for{" "}
                    <br /> the ears, very for the heart. A treat to your ears.
                  </Typography>
                  <Button
                    color="info"
                    variant="contained"
                    sx={{ mt: 5, borderRadius: "50px", px: 2, py: 1 }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ pr: 15 }} className={bannerContainer}>
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/fffiinnna.png?v=1619250080"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={background}>
            <Grid container spacing={5}>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box sx={{ pl: 15 }} className={bannerContainer}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#fc6539",
                      fontSize: "24px",
                      lineHeight: "25px",
                      marginBottom: "10px",
                    }}
                    className={bannerText}
                  >
                    #Most Functional
                  </Typography>
                  <Typography className={bannerTitle}>
                    Minimalist <br /> Store
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#06264b",
                      fontSize: "18px",
                      lineHeight: "30px",
                      marginTop: "20px",
                    }}
                    className={bannerText}
                  >
                    Experience the decibels like your ears deserve to. Safe for
                    <br /> the ears, very for the heart. A treat to your ears.
                  </Typography>
                  <Button
                    color="info"
                    variant="contained"
                    sx={{ mt: 5, borderRadius: "50px", px: 2, py: 1 }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ pr: 15 }} className={bannerContainer}>
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/drone_slider_2.png?v=1620290467"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={background}>
            <Grid container spacing={5}>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box sx={{ pl: 15 }} className={bannerContainer}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#fc6539",
                      fontSize: "24px",
                      lineHeight: "25px",
                      marginBottom: "10px",
                    }}
                    className={bannerText}
                  >
                    #Flying With Smart Control
                  </Typography>
                  <Typography className={bannerTitle}>
                    Minimal <br /> Flying
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#06264b",
                      fontSize: "18px",
                      lineHeight: "30px",
                      marginTop: "20px",
                    }}
                    className={bannerText}
                  >
                    Experience the decibels like your ears deserve to. Safe for{" "}
                    <br /> the ears, very for the heart. A treat to your ears.
                  </Typography>
                  <Button
                    color="info"
                    variant="contained"
                    sx={{ mt: 5, borderRadius: "50px", px: 2, py: 1 }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ pr: 15 }} className={bannerContainer}>
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0111/9135/3402/files/drone_slider_1.png?v=1620286294"
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
