const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
  
const snacksRoute= require('./routes/snacks'); 
app.use('/snacks',snacksRoute);

const uploadRoute= require('./routes/fileuploads');
app.use('/images',uploadRoute);

mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
     console.log("Connected to DB");
});

app.listen(3000);