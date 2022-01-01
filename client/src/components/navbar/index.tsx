import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
          <Typography variant='h4' component='div' flex={1}>
            <b>Employees Management</b>
          </Typography>
          <Button variant='outlined'>New Employee</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
