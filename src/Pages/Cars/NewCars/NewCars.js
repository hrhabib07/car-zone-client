import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DetailsCar from "../../Home/Cars/DetailsCar";

const NewCars = () => {
  const [allCars, setAllCars] = useState();
  useEffect(() => {
    fetch("https://floating-dawn-04596.herokuapp.com/newCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <Container>
      <h2>New car bro</h2>
      {allCars ? (
        <Grid container spacing={2} sx={{ my: 5 }}>
          {allCars?.map((car) => (
            <DetailsCar key={car._id} car={car}></DetailsCar>
          ))}
        </Grid>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Container>
  );
};

export default NewCars;
