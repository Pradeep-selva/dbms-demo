package entities

type EmployeeSummary struct {
	Ssn string `json:"ssn"`
	Fname string `json:"fname"`
	Lname string `json:"lname"`
	Bdate string `json:"bdate"`
	Dno int `json:"dno"`
}

type Employee struct {
	Ssn string `json:"ssn"`
	Fname string `json:"fname"`
	Lname string `json:"lname"`
	Bdate string `json:"bdate"`
	Address string `json:"address"`
	Sex string `json:"sex"`
	Salary int `json:"salary"`
	Super_ssn string `json:"super_ssn"`
	Dno int `json:"dno"`
	Pno int `json:"pno"`
	Hours int `json:"hours"`
	Pname string `json:"pname"`
	Plocation string `json:"plocation"`
	Dname string `json:"dname"`
	MgrSsn string `json:"mgr_ssn"`
	MgrStartDate string `json:"mgr_start_date"`
}