const Employee = require('../models/employeeModel');


// fetch all employee
exports.getAllEmployeeController= async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
};

// Add a new employee
exports.addEmployeeController = async (req, res) => {
    console.log("inside add")
    const { name, contact, email, address } = req.body;

    const newEmployee = new Employee({ name, contact, email, address });
    try {
        await newEmployee.save();
        res.json({ message: 'Employee added successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add employee' });
    }
};