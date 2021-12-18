import { Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 4;
  useEffect(() => {
    fetch(
      `https://glacial-earth-17759.herokuapp.com/reviews?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  const theme = useTheme();
  const useStyle = makeStyles({
    reviewBackground: {
      backgroundImage: `linear-gradient(#F5F7FF,#F5F7FF)`,
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
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
  const { reviewBackground, title } = useStyle();
  return (
    <Box className={reviewBackground}>
      <Container sx={{ mt: 10, pb: 10 }}>
        <Typography
          sx={{
            fontSize: "45px",
            fontWeight: 700,
            py: 3,
            mb: 5,
            borderBottom: "3px solid #DAA520",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Playfair Display, serif",
          }}
          className={title}
        >
          Happy Customer Says
        </Typography>

        <Grid container spacing={1}>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
        <Stack spacing={2}>
          <Box sx={{ pt: 5, display: "flex", justifyContent: "center" }}>
            {
              <Pagination
                count={pageCount}
                variant="outlined"
                color="primary"
                onChange={handleChange}
              />
            }
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Reviews;
