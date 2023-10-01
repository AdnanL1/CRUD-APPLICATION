import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  styled,
} from "@mui/material";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #ffffff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
function AllUsers() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setPosts(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TBody key={post._id}>
            <TableCell>{post._id}</TableCell>
            <TableCell>{post.name}</TableCell>
            <TableCell>{post.username}</TableCell>
            <TableCell>{post.email}</TableCell>
            <TableCell>{post.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${post._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserData(post._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
}

export default AllUsers;
