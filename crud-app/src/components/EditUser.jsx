import React, { useState, useEffect } from "react";

import { addUser, getUser, editUser } from "../service/api";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

function EditUser() {
  const [user, setUser] = useState(initialValue);
  useEffect(() => {
    loadUserDetails();
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const clickHandler = async () => {
    await editUser(user, id);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onChangeValue(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onChangeValue(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>E-Mail</InputLabel>
        <Input
          onChange={(e) => onChangeValue(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onChangeValue(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={clickHandler}>
          EDIT
        </Button>
      </FormControl>
    </Container>
  );
}

export default EditUser;
