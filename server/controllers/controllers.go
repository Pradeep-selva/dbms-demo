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

func GetAllEmployees(DB *sql.DB) func (c *gin.Context) {
	return func (c *gin.Context) {
		rows, err := DB.Query("select * from employee")
	
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "DB READ",
			})
			return
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
				c.JSON(http.StatusInternalServerError, gin.H{
					"error": "DB READ",
				})
				return
			}

			employees = append(employees, employee)
		}

		c.JSON(http.StatusOK, employees)
	}
}

func GetEmployee(DB *sql.DB) func (c *gin.Context) {
	return func (c *gin.Context) {
		SSN, _ := c.Params.Get("ssn")
		rows, err := DB.Query("select * from employee where ssn = ?", SSN)
	
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()
		
		rows.Next()
		var employee entities.Employee
		
		err = rows.Scan(
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
			c.JSON(http.StatusNotFound, gin.H{
				"error": "[NOT FOUND] Employee :: "+SSN,
			})
			return
		}

		c.JSON(http.StatusOK, employee)
	}
}

func AddEmployee(DB *sql.DB) func (c *gin.Context) {
	return func(c *gin.Context) {
		var request entities.NewEmployee
		err := c.Bind(&request)
		if err != nil {
			log.Println(request)
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "PARSE",
			})
			return	
		}

		query, err := DB.Prepare(
			"insert into employee (ssn, fname, lname, bdate, address, sex, salary, super_ssn, dno) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
		)
		_, err = query.Exec(
			request.Ssn, request.Fname, request.Lname, request.Bdate, request.Address, request.Sex, request.Salary, request.Super_ssn, request.Dno,
		) 

		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Failed to insert",
			})
			return
		}

		query, err = DB.Prepare(
			"insert into works_on (essn, pno, hours) values (?, ?, ?)",
		)
		_, err = query.Exec(
			request.Ssn, request.Pno, request.Phours,
		)

		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Failed to insert",
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": "Employee added successfully",
		})
	}
}