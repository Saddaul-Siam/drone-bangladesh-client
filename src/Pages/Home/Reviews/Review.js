import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "react-rating";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import "./Review.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Review = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={0} sx={{ minHeight: "350px", px: 2, py: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center", p: 0, m: 0 }}>
            {review.img ? (
              <img style={{ borderRadius: "50%" }} src={review.img} alt="" />
            ) : (
              <img
                style={{ borderRadius: "50%", width: "96px" }}
                src="https://i.ibb.co/WKLqHF9/man-300x300.png"
                alt=""
              />
            )}
          </Box>
          <Typography
            variant="h6"
            sx={{ display: "flex", justifyContent: "center", fontWeight: 500 }}
          >
            {review.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Rating
              readonly
              initialRating={review.rating}
              emptySymbol="far fa-star iconColor iconColor"
              fullSymbol="fas fa-star iconColor iconColor"
            />
          </Typography>
          <Typography variant="body" color="text.secondary">
            {review.review
              .split(" ")
              .slice(0, 25)
              .toString()
              .replace(/,/g, " ")}
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body" color="text.secondary">
              {review.review
                .split(" ")
                .slice(25, 10000)
                .toString()
                .replace(/,/g, " ")}
            </Typography>
          </Collapse>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Review;
