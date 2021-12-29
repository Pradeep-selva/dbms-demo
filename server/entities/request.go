package entities

type NewEmployee struct {
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
	Phours int `json:"phours"`
}