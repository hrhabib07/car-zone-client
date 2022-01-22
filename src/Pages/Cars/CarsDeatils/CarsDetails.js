import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Grid, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Footer from "../../Shared/Footer/Footer";
import "../../Home/Cars/DetailsCar.css";

const CarsDetails = () => {
  const url = useParams();
  const [car, setCar] = useState();

  useEffect(() => {
    fetch(`https://floating-dawn-04596.herokuapp.com/car/${url.id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [url]);
  console.log(car);

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="delete"
              size="large"
              sx={{ color: "white" }}
            >
              <HomeIcon fontSize="inherit" />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ mx: 3 }}>
            Car details{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Typography
          variant="h4"
          component="div"
          sx={{ my: 5, fontWeight: 600 }}
        >
          Welcome to our Shop{" "}
        </Typography>
        <Box sx={{ my: 2 }}></Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Car Name :{" "}
                  <span style={{ fontWeight: 600 }}>{car?.carName}</span>
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Model : <span style={{ fontWeight: 600 }}>{car?.model}</span>
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Price :{" "}
                  <span style={{ fontWeight: 600 }}>$ {car?.price}</span> only
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Condition :{" "}
                  <span style={{ fontWeight: 600 }}> {car?.condition}</span>{" "}
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Available Seats :{" "}
                  <span style={{ fontWeight: 600 }}> {car?.seats}</span>{" "}
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Location :{" "}
                  <span style={{ fontWeight: 600 }}> {car?.location}</span>{" "}
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  Speed : <span style={{ fontWeight: 600 }}> {car?.speed}</span>{" "}
                  mile/hour
                </Typography>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                  {" "}
                  <span style={{ fontWeight: 500, color: "gray" }}>
                    {" "}
                    {car?.details}
                  </span>{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {car ? (
                <Box>
                  <div className="parent">
                    <div className="child">
                      <img src={car?.carImg} style={{ width: "100%" }} alt="" />
                    </div>
                  </div>
                </Box>
              ) : (
                <CircularProgress color="inherit" />
              )}
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ my: 3 }}>
          <Link style={{ textDecoration: "none" }} to={`/buyNow/${car?._id}`}>
            <Button variant="contained">Buy now</Button>
          </Link>
        </Box>
      </Container>

      <Footer></Footer>
    </React.Fragment>
  );
};

export default CarsDetails;
