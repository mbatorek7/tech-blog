const Post = require('../models/post');
const router = require('express').Router();

router.get('/', async(req, res) => {
    const postData = await Post.findAll();
    const readablePost = postData.map((post) => {
        return post.get({plain: true})
    })
    console.log(readablePost)
    res.render("home", {readablePost})
});

router.get('/login', async(req, res) => {
    res.render("login")
});

module.exports = router;