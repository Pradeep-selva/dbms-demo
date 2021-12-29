package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func IndexRouteHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "dbms-demo",
	})
}