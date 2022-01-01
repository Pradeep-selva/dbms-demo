import * as Yup from "yup";
import { NewEmployee } from "../../entities";

export const Fields = [
  {
    name: "SSN",
    key: "ssn"
  },
  {
    name: "Dept. No.",
    key: "dno"
  },
  {
    name: "First Name",
    key: "fname"
  },
  {
    name: "Last Name",
    key: "lname"
  },
  {
    name: "Address",
    key: "address",
    full: true
  },
  {
    name: "Birth Date",
    key: "bdate"
  },
  {
    name: "Sex",
    key: "sex"
  },
  {
    name: "Salary",
    key: "salary"
  },
  {
    name: "Super SSN",
    key: "super_ssn"
  },
  {
    name: "Project No.",
    key: "pno"
  },
  {
    name: "Hours Worked",
    key: "phours"
  }
];

export const NumericFields = ["phours", "pno", "dno", "salary"];

export const InitialValues: NewEmployee = {
  ssn: "",
  address: "",
  bdate: "",
  dno: 0,
  fname: "",
  lname: "",
  phours: 0,
  pno: 0,
  salary: 0,
  sex: "",
  super_ssn: ""
};

export const ValidationSchema = Yup.object().shape({
  ssn: Yup.string().required().length(9),
  fname: Yup.string().required().max(45, "First name too long!"),
  lname: Yup.string().required().max(45, "Last name too long!"),
  address: Yup.string().required().max(45, "Address too long!"),
  bdate: Yup.date().required(),
  sex: Yup.string().required().length(1),
  salary: Yup.number().required(),
  super_ssn: Yup.string().required().length(9),
  pno: Yup.number().required().min(1, "invalid value!"),
  dno: Yup.number().required().min(1, "invalid value!"),
  phours: Yup.number().required()
});
