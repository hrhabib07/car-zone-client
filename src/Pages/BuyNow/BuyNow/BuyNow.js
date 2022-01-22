import {
  Alert,
  AppBar,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Box } from "@mui/system";
import useAuth from "../../../Hooks/useAuth";
import { ResetTv } from "@mui/icons-material";

const BuyNow = () => {
  const url = useParams();
  const [car, setCar] = useState();
  const [order, setOrder] = useState();
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const handleOnBlur = (e) => {
    const newOrder = { ...order };
    const field = e.target.name;
    const value = e.target.value;
    newOrder[field] = value;
    setOrder(newOrder);
  };

  useEffect(() => {
    fetch(`https://floating-dawn-04596.herokuapp.com/car/${url.id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [url]);

  const handleOrderSubmit = (e) => {
    const { _id, ...rest } = car;

    const orderDetails = { ...order, ...rest, ...user };
    console.log(orderDetails);

    fetch("https://floating-dawn-04596.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => setSuccess(data));

    e.preventDefault();
    e.target.reset();
  };
  //   console.log(car);
  return (
    <Container>
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
            Buy the car{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 5, py: 5 }}>
        <Box>
          <Typography variant="h6" component="div" sx={{ my: 2 }}>
            Car Name : <span style={{ fontWeight: 600 }}>{car?.carName}</span>
          </Typography>
          <Typography variant="h6" component="div" sx={{ my: 2 }}>
            Model : <span style={{ fontWeight: 600 }}>{car?.model}</span>
          </Typography>
          <Typography variant="h6" component="div" sx={{ my: 2 }}>
            Price : <span style={{ fontWeight: 600 }}>$ {car?.price}</span> only
          </Typography>
        </Box>
        {!success && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Container>
                <form onSubmit={handleOrderSubmit}>
                  <TextField
                    label="Your Name"
                    name="userAddress"
                    required
                    onBlur={handleOnBlur}
                    variant="filled"
                    sx={{ width: "80%" }}
                  />
                  <br />
                  <br />
                  <TextField
                    label="Your Address"
                    required
                    name="userAddress"
                    onBlur={handleOnBlur}
                    variant="filled"
                    sx={{ width: "80%" }}
                  />
                  <br />
                  <br />
                  <TextField
                    label="Your Phone Number"
                    required
                    name="userPhone"
                    type="number"
                    onBlur={handleOnBlur}
                    variant="filled"
                    sx={{ width: "80%" }}
                  />
                  <br />
                  <br />

                  <Button variant="contained" type="submit">
                    Place Order
                  </Button>
                  <br />
                  <br />
                </form>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container>
                {car ? (
                  <Box>
                    <div className="parent">
                      <div className="child">
                        <img
                          src={car?.carImg}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </Box>
                ) : (
                  <CircularProgress color="inherit" />
                )}
              </Container>
            </Grid>
          </Grid>
        )}
        {success && (
          <Alert
            sx={{ width: { xs: "90%", md: "50%" }, my: 5 }}
            severity="success"
          >
            Your order added successfully — check it out on my order page!
          </Alert>
        )}
      </Container>
    </Container>
  );
};

export default BuyNow;
