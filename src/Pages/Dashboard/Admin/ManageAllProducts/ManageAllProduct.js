import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { DeleteButton } from "../../../../StyledComponent/MuiButton";

const ManageAllProduct = ({ product }) => {
  const { name, price, _id, img } = product;
  const Swal = require("sweetalert2");

  const handleClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://glacial-earth-17759.herokuapp.com/deleteProducts/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("idToken")}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              Swal.fire(
                "Deleted!",
                "Your products has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <TableBody>
      <TableRow sx={{ my: 2, py: 5 }}>
        <TableCell>
          <img height="100px" width="100px" src={img} alt="" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>{_id}</TableCell>
        <TableCell>
          <DeleteButton onClick={() => handleClick(_id)}>Delete</DeleteButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ManageAllProduct;
