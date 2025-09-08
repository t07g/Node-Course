const http = require('http');

const server = http.createServer(function(req,res){
  console.log(req);
  
});

const PORT =3000;
server.listen(PORT,() =>{
  console.log(`Server running at address http://localhost:${PORT}`)
});
//  http.createServer((req,res)=>{
//   console.log(req);
//  })



// function requestListener(req,res){
//   console.log(req);
// }
// http.createServer(requestListener);