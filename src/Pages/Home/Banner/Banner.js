import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Banner.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Box } from "@mui/material";

// install Swiper modules
SwiperCore.use([Pagination]);

const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Box sx={{ height: "100hv" ,pt:10}}>
      <Swiper pagination={pagination} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://i.ibb.co/z7sHzKb/Screenshot-2021-12-14-110941.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/z7sHzKb/Screenshot-2021-12-14-110941.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/z7sHzKb/Screenshot-2021-12-14-110941.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
