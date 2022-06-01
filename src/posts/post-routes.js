const { Router } = require('express');
const postController = require('./post-controller');

const router = Router();

//router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.get('/posts', postController.getPostByUser);
router.post('/posts', postController.addPost);

module.exports = router;