// core module
const path = require('path');
// external module 
const express = require('express');
const rootDir = require('./utils/pathUtil');
const homeRouter = require('./routes/homeRoter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

const PORT = 3000
app.listen(PORT);
console.log(`Server started at port http://localhost:${PORT}`);


