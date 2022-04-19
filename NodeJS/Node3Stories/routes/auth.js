const express = require('express');
const passport = require('passport');
const router = express.Router();
const logout = require('express-passport-logout');

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', 
    passport.authenticate('google', { scope: ['profile'] }))

//@desc Auth with Google callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/dashboard'
}));

// @ desc logout User
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    //delete req.user; // same as req.logout()
    res.redirect('/');
})

module.exports = router;


