import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #2ecc71; /* Green background color */
`;

const Tab = styled(NavLink)`
  margin-right: 20px;
  font-size: 20px;
  color: #34495e; /* Dark blue text color */
  text-decoration: none;
  transition: color 0.3s ease; /* Smooth color transition on hover */

  &:hover {
    color: #e74c3c; /* Red text color on hover */
  }

  &.active {
    color: #e74c3c; /* Red text color for active link */
  }
`;

function NavBar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tab to="/" activeClassName="active" exact>
            CRUD
          </Tab>
          <Tab to="/all" activeClassName="active">
            All Users
          </Tab>
          <Tab to="/add" activeClassName="active">
            Add Users
          </Tab>
        </Toolbar>
      </Header>
    </div>
  );
}

export default NavBar;
