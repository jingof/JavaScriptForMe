const authFlags =  {
    ensureAuth: function (req, res, next) {
        if(req.isAuthenticated()) {
            console.log("authed")
            return next();
        }
        return  res.render('login', { layout: 'login' });    
    },
    ensureGuest: (req, res, next) => {
        if(req.isAuthenticated() ) {
            return res.redirect('/dashboard');
        }
        return res.render('login', { layout: 'login' });
    },
}

module.exports = authFlags;