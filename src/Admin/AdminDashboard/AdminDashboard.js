import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AdminCarDetails from "./AdminCarDetails";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [allCars, setAllCars] = useState();
  useEffect(() => {
    fetch("https://floating-dawn-04596.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <IconButton aria-label="delete" size="large">
          <HomeIcon fontSize="inherit" />
        </IconButton>
      </Link>

      <Box sx={{ my: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600 }}
          gutterBottom
          component="div"
        >
          This is admin dashboard
        </Typography>
      </Box>
      <Container>
        {allCars ? (
          <Grid container spacing={2} sx={{ my: 5 }}>
            {allCars?.map((car) => (
              <AdminCarDetails key={car._id} car={car}></AdminCarDetails>
            ))}
          </Grid>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Container>
    </Container>
  );
};

export default AdminDashboard;
