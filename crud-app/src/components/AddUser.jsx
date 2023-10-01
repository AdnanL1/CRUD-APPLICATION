import React, { useState } from "react";

import { addUser } from "../service/api";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const clickHandler = async () => {
    await addUser(user);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>E-Mail</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={clickHandler}>
          ADD
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddUser;
