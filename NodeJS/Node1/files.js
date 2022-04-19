const fs = require('fs')
//console.log(fs);
fs.readFile('./this.txt', (err, data) => {
    if (err) {
        console.log('INSIDE ERROR', err);
    }
    else
        console.log(data.toString());
})

fs.writeFile('./thiss.txt', 'hello, world!', () => {
    console.log('file was written');
})

// crrating a folder
// checking if the folder exists
// if it exists, delete it
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else
            console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else
            console.log('folder deleted');
    })
}

// check if a file exists
// remove it if it does
if(fs.existsSync('./thiss.txt')) {
    fs.unlink('./thiss.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}


