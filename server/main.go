package main

import (
	"os"

	_ "github.com/go-sql-driver/mysql"

	"github.com/pradeep-selva/dbms-demo/server/routes"
	"github.com/pradeep-selva/dbms-demo/server/utils"

	"github.com/gin-gonic/gin"
)

func main() {
	DB := utils.InitDB()
	defer DB.Close()

	router := gin.Default()
	routes.InitRoutes(router)

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	router.Run(":" + PORT)
}
