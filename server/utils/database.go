package utils

import (
	"log"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func InitDB() *sql.DB {
	DB, err := sql.Open("mysql", "root@tcp(127.0.0.1:3306)/employees")

	if err != nil {
		log.Fatal(err)
	}
	log.Println("[CONNECTED] Employee DB")

	return DB
}