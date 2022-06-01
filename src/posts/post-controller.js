const pool = require('../../db');
const querries = require('./post-querries');

// const getPosts = (req, res) => {
//     pool.query(querries.getPosts, (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// };

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(querries.getPostById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPostByUser = (req, res) => {
    const id = parseInt(req.query.id);

    pool.query(querries.getPostByUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const addPost = (req, res) => {
    const { title, content, user_id } = req.body;

    //add post to db
    pool.query(querries.addPost, [title, content, user_id], (error, results) => {
        if (error) throw error;
        res.status(201).send('Post has added successfully');
    });
     
};

module.exports = {
    //getPosts,
    getPostById,
    getPostByUser,
    addPost,
};