package controllers

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/dbms-demo/server/entities"
)

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
				"error": "Failed to insert employee",
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
				"error": "Failed to insert working data",
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": "Employee added successfully",
		})
	}
}

func DeleteEmployee(DB *sql.DB) func (c *gin.Context) {
	return func(c *gin.Context) {
		SSN, _ := c.Params.Get("ssn")

		query, _ := DB.Prepare(
			"delete from employee where ssn = ?",
		)
		_, err := query.Exec(SSN) 

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Failed to insert working data",
			})
			return
		}	

		c.JSON(http.StatusOK, gin.H{
			"message": "Employee deleted successfully",
		})
	}
}