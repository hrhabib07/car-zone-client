import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import backgroundImage from "../../../images/banner/backgroundImage.jpg";
const bg = {
  background: `url(${backgroundImage})`,
  backgroundColor: "rgba(9, 17, 32 ,.8)",
  backgroundBlendMode: "darken, luminosity",
};

const Highlight = () => {
  return (
    <Box style={bg} sx={{ height: { xs: "800px", md: "300px" }, my: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{}}>
          <Container
            sx={{
              color: "white",
              border: "1px solid gray",
              borderRadius: "50%",
              height: { xs: "200px", md: "200px" },
              width: "200px",
              mt: 5,
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6054c2",
            }}
          >
            <Box>
              <EventNoteIcon sx={{ fontSize: 50 }}></EventNoteIcon>
              <Typography variant="h4" component="div" sx={{ fontWeight: 900 }}>
                40+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Years In Business
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} sx={{}}>
          <Container
            sx={{
              color: "white",
              border: "1px solid gray",
              borderRadius: "50%",
              height: { xs: "200px", md: "200px" },
              width: "200px",
              mt: 5,
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6054c2",
            }}
          >
            <Box>
              <PeopleAltIcon sx={{ fontSize: 50 }}></PeopleAltIcon>
              <Typography variant="h4" component="div" sx={{ fontWeight: 900 }}>
                600+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Satisfied Customers
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} sx={{}}>
          <Container
            sx={{
              color: "white",
              border: "1px solid gray",
              borderRadius: "50%",
              height: { xs: "200px", md: "200px" },
              width: "200px",
              mt: 5,
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6054c2",
            }}
          >
            <Box>
              <DirectionsCarIcon sx={{ fontSize: 50 }}></DirectionsCarIcon>
              <Typography variant="h4" component="div" sx={{ fontWeight: 900 }}>
                1200+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600 }}
              >
                New Cars For Sale
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Container
            sx={{
              color: "white",
              border: "1px solid gray",
              borderRadius: "50%",
              height: { xs: "200px", md: "200px" },
              width: "200px",
              mt: 5,
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6054c2",
            }}
          >
            <Box>
              <LocalCarWashIcon sx={{ fontSize: 50 }}></LocalCarWashIcon>
              <Typography variant="h4" component="div" sx={{ fontWeight: 900 }}>
                1000+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Used Cars For Sale
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Highlight;
