import React from "react";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Container, TextField, Typography } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import PrimaryButton from "../../../StyledComponent/MuiButton";

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Swal = require("sweetalert2");
  const onSubmit = (data) => {
    data.img = user.photoURL;
    fetch("https://glacial-earth-17759.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  const useStyle = makeStyles({
    rating: {
      outline: 0,
      width: "100%",
      marginBottom: "20px",
      borderRadius: 3,
      fontFamily: "inherit",
      padding: 15,
    },
    textArea: {
      // border: 0,
      outline: 0,
      width: "100%",
      margin: "20px 0",
      borderRadius: 3,
      fontFamily: "inherit",
      padding: 15,
    },
  });
  const { rating, textArea } = useStyle();
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF1493",
            display: "flex",
            justifyContent: "center",
            py: 5,
          }}
        >
          Review our services
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            style={{ width: "100%", height: "50px" }}
            label="Name"
            value={user.displayName}
            {...register("name")}
            variant="outlined"
            required
          />
          <br />
          <br />
          <TextField
            style={{ width: "100%", height: "50px" }}
            label="Email"
            value={user.email}
            {...register("email")}
            variant="outlined"
            required
          />
          <textarea
            className={textArea}
            rows={5}
            placeholder="Review"
            {...register("review")}
            required
          />{" "}
          <br />
          <Typography variant="h6" sx={{ fontWeight: 600, pb: 3 }}>
            Please Rating now
          </Typography>
          <select className={rating} {...register("rating")} required>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </Box>
    </Container>
  );
};

export default AddReview;
