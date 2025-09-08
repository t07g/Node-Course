const http = require('http');

const server = http.createServer(function(req,res){
  console.log(req);
  console.log(req.url,req.method,req.headers);
//  process.exit(); //stop event loop
  
});

const PORT =3000;
server.listen(PORT,() =>{
  console.log(`Server running at address http://localhost:${PORT}`)
});