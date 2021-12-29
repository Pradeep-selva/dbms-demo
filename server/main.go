package main

import (
	"log"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/pradeep-selva/dbms-demo/server/entities"
)

func main() {
	db, err := sql.Open("mysql", "root@tcp(127.0.0.1:3306)/employees")

	if err != nil {
		log.Fatal(err)
	}
	log.Println("[CONNECTED] Employee DB")

	rows, err := db.Query("select * from employee")

	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var emp entities.Employee

		err := rows.Scan(
			&emp.Ssn, 
			&emp.Fname, 
			&emp.Lname, 
			&emp.Bdate, 
			&emp.Address, 
			&emp.Sex, 
			&emp.Salary, 
			&emp.Super_ssn, 
			&emp.Dno,
		)
		if err != nil {
			log.Fatal(err)
		}

		log.Println(emp)
	}

	defer db.Close()
}
