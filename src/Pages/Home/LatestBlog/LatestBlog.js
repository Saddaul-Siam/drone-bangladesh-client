import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";

const LatestBlog = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  const theme = useTheme();
  const useStyle = makeStyles({
    title: {
      [theme.breakpoints.down("md")]: {
        fontSize: "35px !important",
        fontFamily: "Playfair Display !important",
        fontWeight: "700px !important",
        color: "#06264b !important",
        lineHeight: "70px !important",
      },
    },
  });

  const { title } = useStyle();
  return (
    <Container sx={{ py: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ color: "#fc6539", fontSize: "18px", fontWeight: 500 }}
        >
          FEATURED BLOGS
        </Typography>
        <Typography
          sx={{
            pb: 8,
            color: "#06264b",
            fontSize: "45px",
            fontWeight: 700,
            fontFamily: "Playfair Display, serif",
          }}
          className={title}
        >
          Latest Featured Blog
        </Typography>
      </Box>
      <Box>
        <Carousel
          ssr
          // partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          arrows={true}
        >
          <Card sx={{ maxWidth: 360 }} variant="outlined">
            <CardMedia
              sx={{ p: 1 }}
              component="img"
              height="232"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/articles/cea6gt3f_600x400_crop_center.jpg?v=1620464891"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Radndi mpihs amdh pinsis
              </Typography>
              <hr />
              <Typography sx={{ color: "#919090", fontSize: 13, py: 3 }}>
                14 Dec, 2021
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "14px" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 360 }} variant="outlined">
            <CardMedia
              sx={{ p: 1 }}
              component="img"
              height="232"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/articles/drone-blog-3_600x400_crop_center.png?v=1620464561"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Insde drone nihus mpkis
              </Typography>
              <hr />
              <Typography sx={{ color: "#919090", fontSize: 13, py: 3 }}>
                14 Dec, 2021
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "14px" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 360 }} variant="outlined">
            <CardMedia
              sx={{ p: 1 }}
              component="img"
              height="232"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/articles/drone-blog-2_600x400_crop_center.png?v=1620464513"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Drone nise mnise plkuh
              </Typography>
              <hr />
              <Typography sx={{ color: "#919090", fontSize: 13, py: 3 }}>
                14 Dec, 2021
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "14px" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 360 }} variant="outlined">
            <CardMedia
              sx={{ p: 1 }}
              component="img"
              height="232"
              image="https://cdn.shopify.com/s/files/1/0111/9135/3402/articles/drone-blog-1_600x400_crop_center.png?v=1620464459"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                Onisw dia vansi kanei
              </Typography>
              <hr />
              <Typography sx={{ color: "#919090", fontSize: 13, py: 3 }}>
                14 Dec, 2021
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "14px" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Carousel>
      </Box>
    </Container>
  );
};

export default LatestBlog;
