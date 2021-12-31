package main

import (
	"database/sql"
	"os"

	_ "github.com/go-sql-driver/mysql"

	middleware "github.com/pradeep-selva/dbms-demo/server/middlewares"
	"github.com/pradeep-selva/dbms-demo/server/routes"
	"github.com/pradeep-selva/dbms-demo/server/utils"

	"github.com/gin-gonic/gin"
)

var DB *sql.DB

func main() {
	DB = utils.InitDB()
	defer DB.Close()

	router := gin.Default()
	router.Use(middleware.CORSMiddleware())
	routes.InitRoutes(router, DB)

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	router.Run(":" + PORT)
}
