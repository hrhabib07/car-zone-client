import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeathersCar from "../Cars/FeathersCar";

const NewCar = () => {
  const [allCars, setAllCars] = useState();
  useEffect(() => {
    fetch("https://floating-dawn-04596.herokuapp.com/newCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <Container>
      {allCars ? (
        <Grid container spacing={2}>
          {allCars?.slice(0, 3).map((car) => (
            <FeathersCar key={car._id} car={car}></FeathersCar>
          ))}
        </Grid>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Container>
  );
};

export default NewCar;
