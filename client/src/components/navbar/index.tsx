import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

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
          <Link to='/' style={{ flex: 1 }}>
            <Typography variant='h4' component='div'>
              <b>Employees Management</b>
            </Typography>
          </Link>
          <Button variant='outlined'>New Employee</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
