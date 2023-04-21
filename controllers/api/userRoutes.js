const User = require('../../models/User');

const router = require('express').Router();

router.post('/login', async(req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if(!user) {
        return res.status(400).json({error: "No user found."});
    }

    const validPass = await user.checkPassword(password);
    if(validPass) {
        req.session.save(function(err){
            if(err) {
                console.error(err);
            }

            req.session.userId = user.id;
            req.session.email = user.email;
            req.session.loggedIn = true;
            console.log("------->", req.session);
            res.json({user, message: "You are now logged in."})
        });
    } else {
        return res.status(400).json({error: "Invalid password"});
    }
});

router.post('/create', async(req, res) => {
    console.log(req.body);

    const {email, password} = req.body;

    const newUser = await User.create({
        email, 
        password
    });

    console.log(newUser);
    res.json(newUser);
});

router.post('/logout', async(req, res) => {
    console.log("------->logout", req.session);
    console.log(req.session.loggedIn)
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).json({message: "Logged out"})
        })
    } else {
        res.status(400).json({error: "not logged in"});
    }

});

module.exports = router;