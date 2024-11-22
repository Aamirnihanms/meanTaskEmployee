const express = require("express")
const router = new express.Router()
const employeeController = require("../controller/employee")

// get all employee
router.get("/all-employee",employeeController.getAllEmployeeController)

// add employee
router.post("/add-employee",employeeController.addEmployeeController)


module.exports=router