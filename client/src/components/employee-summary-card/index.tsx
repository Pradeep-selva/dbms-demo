import React from "react";
import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import { EmployeeSummary } from "../../entities";
import { Box } from "@mui/system";

const EmployeeSummaryCard: React.FC<EmployeeSummary> = ({
  bdate,
  dno,
  fname,
  lname,
  ssn
}) => {
  const getAgeInYears = (birthday: string) =>
    new Date(
      new Date().valueOf() - new Date(birthday).valueOf()
    ).getFullYear() - 1970;

  return (
    <Card
      variant='outlined'
      style={{
        borderColor: "#41487d",
        borderWidth: 2,
        marginBottom: "1rem",
        backgroundColor: "#0f101c"
      }}
    >
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <Box
          {...{
            display: "flex",
            flexDirection: "column",
            flex: 1
          }}
        >
          <Typography align='left' color='GrayText'>
            <b>{ssn}</b>
          </Typography>
          <Typography align='left' color='white'>
            {!!fname.length && fname[0].toUpperCase() + fname.slice(1)}{" "}
            {!!lname.length && lname[0].toUpperCase() + lname.slice(1)}
          </Typography>
        </Box>
        <Typography align='left' color='white' flex={1}>
          Dept. {dno}
        </Typography>
        <Typography align='left' color='white' flex={1}>
          {getAgeInYears(bdate)} yrs old
        </Typography>
        <Button variant='outlined' style={{ marginRight: "0.5rem" }}>
          View
        </Button>
        <Button variant='outlined' color='error'>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeSummaryCard;
