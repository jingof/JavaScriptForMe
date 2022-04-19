const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

// Load config
dotenv.config({ path: './config/config.env' })

// Bdoy parser
app.use(express.urlencoded({extended: false }))
app.use(express.json())

// Method override
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method
        delete req.body._method
        return method
    }
}))



//Passport config
require('./config/passport')(passport);

connectDB();


// Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs');
// Handlebars
app.engine('.hbs', exphbs.engine({ 
    helpers: { formatDate, stripTags, truncate, editIcon, select },
    defaultLayout: 'main', 
    extname: '.hbs' }));
app.set('view engine', '.hbs');

// session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// set global variable
app.use((req, res, next) => {
    res.locals.user = req.user || null
    next()
})

// static folder
app.use(express.static('public'));
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// routes 
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));