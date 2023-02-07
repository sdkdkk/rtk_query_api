import React from "react";
import { useGetUserByIdQuery } from "../services/Users";

const User = ({ match }) => {
  const { data, isError, isLoading } = useGetUserByIdQuery(match.params.userId);

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>something went wrong !</p>;
  }

  console.log(data);
  return <div>{data.name}</div>;
};

export default User;
