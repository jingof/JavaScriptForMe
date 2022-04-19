const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();


router.get('', (req, res) => res.redirect('/'))

router.get('/create', (req, res) => 
    res.render('create', { title: "Create" }))

router.post('', (req, res, next) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => res.redirect('/'))
        .catch(err => res.send(err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('details', { title: "Blog Details", blog: result }))
        .catch(err => res.send(err));
})

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => res.redirect('/'))
        .catch(err => res.send(err));
})

module.exports = router;