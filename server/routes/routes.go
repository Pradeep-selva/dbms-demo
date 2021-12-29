package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/dbms-demo/server/controllers"
)

func InitRoutes(router *gin.Engine) {
	router.GET("/", controllers.IndexRouteHandler)
}