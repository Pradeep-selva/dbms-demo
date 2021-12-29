package main

import (
	"log"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root@tcp(127.0.0.1:3306)/employees")

	if err != nil {
		log.Fatal(err)
	}
	log.Println("[CONNECTED] Employee DB")

	rows, err := db.Query("select * from employee")

	if err != nil {
		log.Println("rows")
		log.Fatal(err)
	}
	defer rows.Close()

	var (
		ssn string
		fname string
		lname string
		bdate string
		address string
		sex string
		salary int
		super_ssn string
		dno int
	)

	for rows.Next() {
		err := rows.Scan(&ssn, &fname, &lname, &bdate, &address, &sex, &salary, &super_ssn, &dno)
		if err != nil {
			log.Println("row")
			log.Fatal(err)
		}

		log.Println(ssn)
	}

	defer db.Close()
}