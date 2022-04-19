const fs = require('fs');
const readStream = fs.createReadStream('./kevinHart.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./kevinHart2.txt');
readStream.on('data', (chunck) => {
    console.log('\n----- NEW CHUNCK ------\n');
    // do not usr toString() if encoding is specified
    console.log(chunck.toString());

    //writeStream.write('\n----- NEW CHUNCK ------\n');
    //writeStream.write(chunck);

})

// piping
// reads directly from a readstream and writes it to the pipe stream

readStream.pipe(writeStream);

