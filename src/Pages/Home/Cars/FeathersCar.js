import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./DetailsCar.css";

const FeathersCar = ({ car }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardContent sx={{ my: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            {car.carName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.details}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeathersCar;
