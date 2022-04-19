const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();


// mongo db
const dbURI = "mongodb+srv://nodeninja:node1234@expressblog.0azcv.mongodb.net/expressBlog?retryWrites=true&w=majority";
// connection leads to deprication warnings
mongoose.connect(dbURI);
// this prevents the warnings
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(4000);
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// specify folder with static pages and allow access to other files
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const blogs = [
    { title: 'Francis Jingo', snippet: 'Like this Like that, Always Have Love for God' },
    { title: 'Tiano Jingo', snippet: 'Like this Like that, Always Have Love for God' },
    { title: 'Francis Tiano', snippet: 'Lorem this Like that, Always Have Love for God' }
];

app.use((req, res, next) => {
    console.log('new request made');
    console.log();
    next();
})

app.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => res.render('index', { title: "Home", blogs: result }))
        .catch((err) => console.log(err));
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
})

app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
});