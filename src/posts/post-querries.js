//const getPosts = 'SELECT * FROM posts';
const addPost = 'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)';
const getPostById = 'SELECT * FROM posts WHERE id = $1';
const getPostByUser = 'SELECT * FROM posts WHERE user_id = $1';

module.exports = {
    //getPosts,
    getPostById,
    getPostByUser,
    addPost,
};