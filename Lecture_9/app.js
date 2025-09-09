const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('In the middleware! 1.',req.url,req.method);
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware 2.",req.url,req.method);
  next();
});  

app.use((req, res, next) => {
  console.log("In the last middleware 3.",req.url,req.method);
 next();
});

app.get('/', (req, res,next) => {
  console.log("Handling '/' for get.",req.url,req.method);
  res.send('<h1>WELCOME TO DETAILS PAGE!</h1>');
});

app.get('/details', (req, res,next) => {
  console.log("Handling '/detaiuls' for get",req.url,req.method);
  res.send(
    `<h1>WELCOME TO DETAILS PAGE!</h1>
    <form action="/details" method="POST">
      <input type="text" name="name" placeholder='please enter your name'/>
      <input type='text'  name='age' placeholder='please enter your age'/>
      <input type ='text' name ='email' placeholder='please enter your email'/>

      <input type='submit'/>
      </form>`
  );
});
app.post('/details', (req, res,next) => {
  console.log("Handling '/details' for post",req.url,req.method);
  res.send('<h1>Thanks for submitting your details!</h1>');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


