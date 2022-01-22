import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const AdminCarDetails = ({ car }) => {
  const handleDeleteCar = () => {
    let ans = window.confirm("Are You sure to cancel this order?");
    if (ans) {
      fetch(`https://floating-dawn-04596.herokuapp.com/cars/${car._id}`, {
        method: "delete",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("this item is deleted reload the page to show update");
          }
        });
    }
  };
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Box>
          <div className="parent">
            <div className="child" style={{ backgroundImage: `${car.carImg}` }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={car.carImg}
              />
            </div>
          </div>
        </Box>
        <CardContent sx={{ my: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            {car.carName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {car.details}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            gutterBottom
            color="text.secondary"
          >
            $ {car.price}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleDeleteCar}
            color="error"
            sx={{ my: 3 }}
          >
            Delete Car
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AdminCarDetails;
