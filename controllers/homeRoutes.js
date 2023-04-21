const { User } = require('../models');
const Post = require('../models/post');
const router = require('express').Router();

router.get('/', async(req, res) => {
    const postData = await Post.findAll({
        include: [User]
    });
    const readablePost = postData.map((post) => {
        return post.get({plain: true})
    })
    res.render("home", {readablePost})
});

router.get('/dashboard', async(req, res) => {
    const postData = await Post.findAll({
        where: {
            user_id: req.session.userId
        }
    });
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