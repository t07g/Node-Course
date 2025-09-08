console.log("My name is Tanmay.");

const fs = require('fs');
fs.writeFile('output.txt',"writing file... Tanmay Gupta",(err) =>
{ if (err) console.log("error occured");
  else console.log('file written successfully');

})