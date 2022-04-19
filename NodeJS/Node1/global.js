//console.log(global);

setTimeout(() => {
    console.log("time out 3s");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
console.log("interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
