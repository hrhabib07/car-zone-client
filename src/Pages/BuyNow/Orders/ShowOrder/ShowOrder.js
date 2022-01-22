import { Button, CardContent, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ShowOrder = ({ order }) => {
  console.log(order);
  const handleOrderCancel = () => {
    let ans = window.confirm("Are You sure to cancel this order?");
    if (ans) {
      fetch(`https://floating-dawn-04596.herokuapp.com/orders/${order._id}`, {
        method: "delete",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.location.reload();
          }
        });
    }
  };
  return (
    <Box sx={{ my: 2 }}>
      <Paper>
        <Box sx={{ py: 3 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Car Name: {order.carName}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Location: {order.location}
          </Typography>
          <Typography variant="body2">
            $ {order.price}
            <br />
            {'"a benevolent smile"'}
          </Typography>

          <Button
            variant="outlined"
            onClick={handleOrderCancel}
            color="error"
            sx={{ my: 3 }}
          >
            Cancel order
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ShowOrder;
