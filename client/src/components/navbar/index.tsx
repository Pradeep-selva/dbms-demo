import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "6rem" }}>
      <AppBar
        position='static'
        elevation={0}
        style={{
          backgroundColor: "#0f101c",
          height: "5rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar>
          <Link
            to='/'
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <ManageAccountsIcon
              style={{ fontSize: "3rem", margin: "1rem 1rem" }}
            />
            <Typography variant='h4' component='div' align='left'>
              <b>Employees Management</b>
            </Typography>
          </Link>
          <Box flex={1} />
          <Link to='/new-employee'>
            <Button variant='outlined'>New Employee</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
