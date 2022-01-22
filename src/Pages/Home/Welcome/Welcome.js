import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import newCar from "../../../images/banner/newCar.png";
import oldCar from "../../../images/banner/oldCar.png";
const Welcome = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 3 }}>
          <span style={{ fontWeight: 600 }}> Welcome</span> to CarForYou
        </Typography>
        <Typography
          variant="subtitle"
          gutterBottom
          component="div"
          sx={{ my: 3 }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </Typography>
      </Box>
      <Grid container spacing={10}>
        {/* looking for old car */}
        <Grid item xs={12} md={6} sx={{ px: 5 }}>
          <Container
            sx={{
              border: "2px solid gray",
              borderRadius: "5px 50px 5px 50px",
            }}
          >
            <Grid container sx={{ my: 5, py: 5 }}>
              <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ my: 3 }}
                >
                  <span style={{ fontWeight: 600 }}> Looking</span> Used Car?
                </Typography>
                <Typography
                  variant="subtitle"
                  gutterBottom
                  component="div"
                  sx={{ my: 3 }}
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </Typography>
                <Button variant="contained">View Listing</Button>
              </Grid>
              <Grid item xs={6}>
                <img src={oldCar} alt="" />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        {/* looking for new car */}
        <Grid item xs={12} md={6} sx={{ px: 5 }}>
          <Container
            sx={{
              border: "2px solid gray",
              borderRadius: "5px 50px 5px 50px",
            }}
          >
            <Grid container sx={{ my: 5, py: 5 }}>
              <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ my: 3 }}
                >
                  <span style={{ fontWeight: 600 }}> Looking</span> New Car?
                </Typography>
                <Typography
                  variant="subtitle"
                  gutterBottom
                  component="div"
                  sx={{ my: 3 }}
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </Typography>
                <Button variant="contained">View Listing</Button>
              </Grid>
              <Grid item xs={6}>
                <img src={newCar} alt="" />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
