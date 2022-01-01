export interface EmployeeSummary {
  ssn: string;
  fname: string;
  lname: string;
  bdate: string;
  dno: number;
}

export interface Employee extends EmployeeSummary {
  address: string;
  sex: string;
  salary: number;
  super_ssn: string;
  pno: number;
  hours: number;
  pname: string;
  plocation: string;
  dname: string;
  mgr_ssn: string;
  mgr_start_date: string;
}

export interface NewEmployee extends EmployeeSummary {
  address: string;
  sex: string;
  salary: number;
  super_ssn: string;
  pno: number;
  phours: number;
}
