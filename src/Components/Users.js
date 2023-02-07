import React from "react";
import { useGetAllUsersQuery } from "../store";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, isError, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>something went wrong !</p>;
  }

  return (
    <Grid spacing={4} container>
      {data.map(({ id, username, name, email }) => (
        <Grid sm={3} item>
          <Paper sx={{ padding: 2 }}>
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{email}</p>
            <Button component={Link} to={`users/${id}`} variant="contained">
              View Profile
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
