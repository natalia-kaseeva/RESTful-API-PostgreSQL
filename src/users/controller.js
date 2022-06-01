const pool = require('../../db');
const querries = require('./querries');

const getUsers = (req, res) => {
    pool.query(querries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { firstname, lastname, email, dob } = req.body;

    //check if email exist
    pool.query(querries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }

        //add student to db
        pool.query(querries.addUser, [firstname, lastname, email, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send('User has added successfully');
        });
    }); 
};

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('User does not exist in the database, could not remove');
        }

        pool.query(querries.removeUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('User has removed successfully');
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { firstname } = req.body;

    pool.query(querries.getUserById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('User does not exist in the database, could not update');
        }

        pool.query(querries.updateUser, [firstname, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('User has updated successfully');
        });
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
};