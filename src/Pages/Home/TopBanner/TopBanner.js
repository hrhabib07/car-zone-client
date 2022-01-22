import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import topBanner from "../../../images/banner/banner-image.jpg";
const backgroundImage = {
  background: `url(${topBanner})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  maxWidth: "100%",
};

const TopBanner = () => {
  return (
    <Box
      style={backgroundImage}
      sx={{
        height: {
          xs: "300px",
          md: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Grid container spacing={2} sx={{}}>
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <Container sx={{}}>
            <Container
              sx={{
                color: "white",
                textAlign: "left",
                mr: { sm: 0, md: "3" },
                width: { sm: "100%", md: "75%" },
              }}
            >
              <Typography variant="h4" gutterBottom component="div">
                FIND THE RIGHT CAR FOR YOU.
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                component="div"
                sx={{ color: "white", textAlign: "left" }}
              >
                We have more than a thousand cars for you to choose.
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
