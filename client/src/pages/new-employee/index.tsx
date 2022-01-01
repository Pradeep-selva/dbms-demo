import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { Fields } from "./schema";

const NewEmployee = () => {
  return (
    <Container>
      <Typography variant='h3' style={{ marginBottom: "3rem" }}>
        <b>Add new Employee</b>
      </Typography>
      <FormControl onSubmit={() => console.log("asdasdasdasdasda")}>
        <Grid container spacing={2}>
          {Fields.map(({ key, name, full }) => (
            <Grid item xs={full ? 12 : 6} key={key}>
              <TextField
                fullWidth
                variant='filled'
                label={name}
                InputLabelProps={{
                  style: {
                    color: "#a1cfc7"
                  }
                }}
                multiline={full}
                rows={3}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant='contained'
              style={{ height: "3rem", marginTop: "2rem" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default NewEmployee;
