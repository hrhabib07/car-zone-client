import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "./DetailsCar.css";

const DetailsCar = ({ car }) => {
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
          <Link to={`/details/${car._id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained">Details</Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DetailsCar;
