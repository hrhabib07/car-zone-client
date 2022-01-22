import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch(`https://floating-dawn-04596.herokuapp.com/users/admin`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="email"
          name="email"
          onBlur={handleOnBlur}
          variant="filled"
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Make admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
