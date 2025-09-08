console.log('1. Start of script');
//Microtask queue(promise)

Promise.resolve().then(() => {console.log('2. Microtask 1');});
//timer queue
setTimeout(()=>{console.log('3.Timer 1');},0);

//I/O queue
const fs = require('fs');
fs.readFile('user_details.txt',()=>console.log('4. I/O 1'));

//check queue
setImmediate(() =>{ console.log('5. Immediate 1');});

//clone queue
process.on('exit',()=>{console.log('6. Process exit with code:');});

console.log('7. End of script');