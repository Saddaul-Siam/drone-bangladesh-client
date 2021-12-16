import React from "react";
import { styled } from "@mui/system";

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f6f6f6;
  }
`;

export default function Cart() {
  return (
    <Root>
      <table style={{ minWidth: 500 }} aria-label="custom pagination table">
        <thead>
          <tr>
            <th style={{ width: 199 }}>Image</th>
            <th style={{ width: 400 }}>Product</th>
            <th style={{ width: 199 }}>Price</th>
            <th style={{ width: 600 }}>Quantity</th>
            <th style={{ width: 199 }}>Total</th>
            <th style={{ width: 199 }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 199 }}>Image</td>
            <td style={{ width: 400 }}>Product</td>
            <td style={{ width: 199 }}>Price</td>
            <td style={{ width: 600 }}>Quantity</td>
            <td style={{ width: 199 }}>Total</td>
            <td style={{ width: 199 }}>Remove</td>
          </tr>
        </tbody>
      </table>
    </Root>
  );
}
