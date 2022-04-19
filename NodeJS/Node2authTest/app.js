const express = require('express');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
app.set('view engine', 'ejs');

//Middleware
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());

const GOOGLE_CLIENT_ID = "112963109316-qth7efistgkrf22stq0eo7n13q2iv9qb.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

authUser = (request, accessToken, refreshToken, profile, done) => {
    let user = {
        id: profile.id,
        displayName: profile.displayName,
        name: profile.name.givenName,
        email: profile.emails[0].value,
        image: profile.photos[0].value
    }
    return done(null, user);
}

const port = process.env.PORT || 5000;
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/callback`,
    passReqToCallback: true
}, authUser));

passport.serializeUser((user, cb) => {
    // The USER object is the "authenticated user" from the done() in authUser function.
    // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.  
    cb(null, user);
});

passport.deserializeUser((user, done) => {
    // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
    // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.
    done(null, user);
});

app.listen(port, () => console.log(`App listening on port ${port}`));

app.get('/auth/google',
    passport.authenticate('google', { 
        scope: ['profile', 'email'] 
    }));

app.get('/auth/google/callback',
    passport.authenticate('google', {  
        failureRedirect: '/error',
        successRedirect: '/success'   
}));

//Use the req.isAuthenticated() function to check if user is Authenticated
checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    return res.render('pages/auth');
}

checkLogin = (req, res, next) => {
    if (req.isAuthenticated()) { 
        return res.render('pages/success', { user: req.user });
    }         
    return res.render('pages/auth');
}

app.get("/login",  (req, res) => {
    res.redirect("/");
})

app.get('/',  checkLogin, (req, res) => {
    res.render('pages/auth');
});

app.get('/success', checkAuthenticated, (req, res) => {
    res.render('pages/success', { user: req.user })
})

app.get('/error',checkLogin, (req, res) => res.send("error logging in"));

app.post("/logout",  (req, res) => {   
    req.logout()
    res.redirect("/login")
})