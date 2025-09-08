const sumRequestHandler = (req, res) => {
  console.log('In sum request handler');
  const body = [];
  req.on('data',(chunk)=>{
    body.push(chunk);
  });
  req.on('end',()=>{
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first)+Number(bodyObj.second);  
    console.log(result);
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
        <h2>Sum is ${result}</h2>
        </body>
      </html>
      `);
    return res.end();

  });
}
exports.sumRequestHandler = sumRequestHandler;