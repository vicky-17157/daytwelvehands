const express= require('express');
//const multer= require('multer');
const router = express.Router();

const upload = require('../models/fileupload');
router.post('/',upload.single('image'),(req,res) =>{
    try{
        const file =req.file;
        console.log(file);
    }
    catch(err){
        console.log({message:err});
    }
});

module.exports=router;