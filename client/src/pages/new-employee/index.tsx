import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { FormikHelpers, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ApiEndpoints, API_SUCCESS } from "../../config";
import { NewEmployee } from "../../entities";
import { Fields, InitialValues, ValidationSchema } from "./schema";

type NewEmployeeKey = keyof NewEmployee;

const AddNewEmployee = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (
    {
      address,
      bdate,
      dno,
      fname,
      lname,
      phours,
      pno,
      salary,
      sex,
      ssn,
      super_ssn
    }: NewEmployee,
    { setSubmitting }: FormikHelpers<NewEmployee>
  ) => {
    setSubmitting(true);
    try {
      const response = await axios.post(ApiEndpoints.employee(), {
        ssn,
        address,
        bdate,
        dno: parseInt(dno as any),
        fname,
        lname,
        phours: parseInt(phours as any),
        pno: parseInt(pno as any),
        salary: parseInt(salary as any),
        sex,
        super_ssn
      });

      if (response.status === API_SUCCESS) {
        setError(false);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: InitialValues,
    onSubmit: handleSubmit,
    validationSchema: ValidationSchema
  });

  return (
    <Container>
      <Typography variant='h3' style={{ marginBottom: "3rem" }}>
        <b>Add new Employee</b>
      </Typography>
      {error && (
        <Alert severity='error'>
          There was an error! Could not add new user
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
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
                InputProps={{
                  style: {
                    color: "#fff"
                  }
                }}
                multiline={full}
                rows={3}
                value={formik.values[key as NewEmployeeKey]}
                onChange={({ target: { value } }) =>
                  formik.setFieldValue(key, value)
                }
                error={
                  formik.touched[key as NewEmployeeKey] &&
                  Boolean(formik.errors[key as NewEmployeeKey])
                }
                helperText={
                  formik.touched[key as NewEmployeeKey] &&
                  formik.errors[key as NewEmployeeKey]
                }
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              style={{
                height: "3rem",
                marginTop: "2rem",
                marginBottom: "2rem"
              }}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddNewEmployee;
