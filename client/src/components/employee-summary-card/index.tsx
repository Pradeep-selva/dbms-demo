import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { EmployeeSummary } from "../../entities";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { getAgeInYears, getCapitalizedName } from "../../utils";

const EmployeeSummaryCard: React.FC<EmployeeSummary> = ({
  bdate,
  dno,
  fname,
  lname,
  ssn
}) => {
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
            {getCapitalizedName(fname, lname)}
          </Typography>
        </Box>
        <Typography align='left' color='white' flex={1}>
          Dept. {dno}
        </Typography>
        <Typography align='left' color='white' flex={1}>
          {getAgeInYears(bdate)} yrs old
        </Typography>
        <Link to={`/employee/${ssn}`}>
          <Button variant='outlined' style={{ marginRight: "0.5rem" }}>
            View
          </Button>
        </Link>
        <Button variant='outlined' color='error'>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeSummaryCard;
