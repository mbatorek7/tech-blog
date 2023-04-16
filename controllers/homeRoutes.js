const Post = require('../models/post');
const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render("home")
});

router.get('/dashboard', async(req, res) => {
    const postData = await Post.findAll();
    const readablePost = postData.map((post) => {
        return post.get({plain: true})
    })
    console.log(readablePost)
    res.render("dashboard", {readablePost})
});

router.get('/login', async(req, res) => {
    res.render("login")
});

router.get('/signup', async(req, res) => {
    res.render("signup")
});

router.get('/newPost', async(req, res) => {
    res.render("newPost")
});


module.exports = router;