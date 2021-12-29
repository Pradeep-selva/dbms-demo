package routes

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/dbms-demo/server/controllers"
)

func InitRoutes(router *gin.Engine, DB *sql.DB) {
	router.GET("/", controllers.IndexRouteHandler)
	router.GET("/employees", controllers.GetAllEmployees(DB))
	router.GET("/employee/:ssn", controllers.GetEmployee(DB))
}