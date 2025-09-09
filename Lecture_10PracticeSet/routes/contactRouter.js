// core Module
const path = require('path');

//external module
const express = require('express');

//local module
const rootDir = require('../utils/pathUtil');

const contactRouter = express.Router();

contactRouter.get('/contactUs',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contactUs.html'));
});

contactRouter.post('/contactUs',(req,res,next)=>{
  console.log(req.body);
  console.log("Handling '/contactUs' for post.",req.url,req.method);
  res.sendFile(path.join(rootDir,'views','contactSuccess.html'));
});

module.exports = contactRouter;