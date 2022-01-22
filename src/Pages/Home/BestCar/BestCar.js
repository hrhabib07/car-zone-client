import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NewCar from "../NewCar/NewCar";

const BestCar = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 5 }}>
          <span style={{ fontWeight: 600 }}> Find the Best</span> CarForYou
        </Typography>
        <Typography
          variant="Subtitle"
          gutterBottom
          component="div"
          sx={{ my: 5 }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </Typography>
      </Container>
      <NewCar></NewCar>
    </Box>
  );
};

export default BestCar;
