const http = require('http');
const fs = require('fs');
const _ = require('lodash');
let path;

// lodash

const server = http.createServer((req, res) => {
    const greet = _.once(()  => {
        console.log('hello');
    });
    greet();
    greet();
    greet();
    const num = _.random(0, 20);
    console.log(num);
    //console.log(req.url, req.method);
    res.statusCode = 200;
    let pathUrl = req.url;
    pathUrl = pathUrl.replaceAll('/', '');
    if (pathUrl == '') {
        path = './index.html'
    }
    else if (pathUrl == 'about') {
        path = './about.html'
    }
    else if (pathUrl == 'about-me') {
        path = './about.html'
    }
    else {
        path = './404.html';
        res.statusCode = 404;
    }

    // set response header content type
    res.setHeader('Content-Type', 'text/html');
    // reading the file and setting the 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data.toString());

        }
        res.end();
    })
});

server.listen(4000, 'localhost', () => {
    console.log('listening for request on port 4000');
    
});