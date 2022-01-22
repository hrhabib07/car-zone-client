import {
  Alert,
  AppBar,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import useAuth from "../../../../Hooks/useAuth";
import ShowOrder from "../ShowOrder/ShowOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch(
      `https://floating-dawn-04596.herokuapp.com/myOrders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  console.log(orders);
  return (
    <>
      <AppBar sx={{ position: "static" }}>
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Your Order{" "}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        {orders?.length > 0 ? (
          <Grid container spacing={2}>
            {orders?.map((order) => (
              <Grid item xs={12} md={4}>
                <ShowOrder key={order._id} order={order}></ShowOrder>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ my: 5 }}>
            <CircularProgress />
          </Box>
        )}
      </Container>
    </>
  );
};

export default MyOrders;
