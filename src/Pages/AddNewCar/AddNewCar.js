import {
  Alert,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import addNewCarImg from "../../images/login/addNewCar2.jpg";
import { Box } from "@mui/system";

const AddNewCar = () => {
  const [carData, setCarrData] = useState({});
  const [success, setSuccess] = useState(false);
  const handleAddMore = (e) => {
    setSuccess(false);
  };
  const handleOnBlur = (e) => {
    const newCar = { ...carData };
    const field = e.target.name;
    const value = e.target.value;
    newCar[field] = value;
    setCarrData(newCar);
  };
  const handleLoginSubmit = (e) => {
    fetch("https://floating-dawn-04596.herokuapp.com/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((res) => res.json())
      .then((data) => setSuccess(data.acknowledged));
    e.preventDefault();
  };
  return (
    <Container>
      {!success && (
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              height: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{ my: 5, fontWeight: 600 }}
              >
                {" "}
                Add new car
              </Typography>

              <form onSubmit={handleLoginSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Car name"
                      name="carName"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="New or old?"
                      name="condition"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="price"
                      name="price"
                      required
                      type="number"
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Car image url"
                      name="carImg"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="car details"
                      name="details"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="car battery"
                      name="battery"
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Available seats"
                      type="number"
                      name="seats"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />

                    <TextField
                      label="Highest speed"
                      name="speed"
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Road travel"
                      name="roadTravel"
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Short description"
                      name="shortDescription"
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Location"
                      name="location"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Car Model"
                      name="carModel"
                      required
                      onBlur={handleOnBlur}
                      variant="filled"
                      sx={{ width: "100%" }}
                    />
                    <br />
                    <br />
                  </Grid>
                </Grid>

                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "35%", m: 2 }}
                >
                  Add car
                </Button>
                <br />

                <br />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <IconButton aria-label="delete" size="large">
                    <HomeIcon fontSize="inherit" />
                  </IconButton>
                </Link>
              </form>
            </Container>
          </Grid>
          <Grid item xs={12} md={5} sx={{ my: "auto" }}>
            <img src={addNewCarImg} width={"100%"} alt="" />
          </Grid>
        </Grid>
      )}
      {success && (
        <Box>
          <Alert
            sx={{ width: { xs: "90%", md: "50%" }, my: 5 }}
            severity="success"
          >
            Your order added successfully — check it out on my order page!
          </Alert>
          <br />
          <br />
          <Link to="/" style={{ textDecoration: "none", mx: 3 }}>
            <IconButton variant="outlined" aria-label="delete" size="large">
              <HomeIcon fontSize="inherit" />
              go home
            </IconButton>
          </Link>
          <br />
          <br />
          <Link onClick={handleAddMore} style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="large">
              Add more
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
};

export default AddNewCar;
