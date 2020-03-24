const express = require('express');
const router = express.Router();

const posts = require('../controllers/posts.controller');

router.get('/posts', posts.loadAll);
router.get('/my-posts', posts.loadByUser);
router.post('/posts', posts.addPost);


module.exports = router;