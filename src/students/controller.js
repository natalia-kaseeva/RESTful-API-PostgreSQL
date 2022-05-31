const pool = require('../../db');
const querries = require('./querries');

const getStudents = (req, res) => {
    pool.query(querries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { name, email, dob, age } = req.body;

    //check if email exist
    pool.query(querries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }

        //add student to db
        pool.query(querries.addStudent, [name, email, dob, age], (error, results) => {
            if (error) throw error;
            res.status(201).send('Student has added successfully');
        });
    }); 
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student does not exist in the database, could not remove');
        }

        pool.query(querries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(201).send('Student has removed successfully');
        });
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
};