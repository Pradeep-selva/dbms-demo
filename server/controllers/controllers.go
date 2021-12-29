package controllers

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/dbms-demo/server/entities"
)

func IndexRouteHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "dbms-demo",
	})
}

func GetAllEmployees(DB *sql.DB) func (c*gin.Context) {
	return func (c *gin.Context) {
		rows, err := DB.Query("select * from employee")
	
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		var employees []entities.Employee

		for rows.Next() {
			var employee entities.Employee

			err := rows.Scan(
				&employee.Ssn, 
				&employee.Fname, 
				&employee.Lname, 
				&employee.Bdate, 
				&employee.Address, 
				&employee.Sex, 
				&employee.Salary, 
				&employee.Super_ssn, 
				&employee.Dno,
			)
			if err != nil {
				log.Fatal(err)
			}

			employees = append(employees, employee)
		}

		c.JSON(http.StatusOK, employees)
	}
}