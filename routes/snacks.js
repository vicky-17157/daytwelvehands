const express = require('express');
const router = express.Router();
const Snack = require('../models/snack');

//getting all the datas
router.get('/', async(req,res) =>{
     try{
         const snack = await Snack.find();
         res.json(snack);
        }
        catch (err){
            res.json({message:err});
        }
});


// getting a post by id

router.get('/:snackid', async(req,res) =>{
     try{
          const snack = await Snack.findById(req.params.snackid);
           res.json(snack);
         }
         catch(err){
              res.json({message:err});
          }
});     

 // creating a post

router.post('/',(req,res)=>{
     const snack =new Snack({
          name:{firstname:req.body.name.firstname},
          type:{snacktype:req.body.type.snacktype,brand:req.body.type.brand}
          
     });
         snack.save().
         then(data =>{
             res.json(data);
          }).catch (err=>{
               res.json({message:err});
     })
});

// deleting a post

router.delete('/:snackid', async(req,res) =>{
     try{
           const removepost = await Snack.deleteOne({_id: req.params.snackid});
           res.json(removepost);
     }
     catch(err){
          res.json({message:err});
     }
});

// updating a post by id

router.patch('/:snackid', async(req,res) =>{
     try{
          const snack = await Snack.findOne({_id: req.params.snackid});
          if(req.body.name){
                if(req.body.name.firstname){
                     snack.name.firstname=req.body.name.firstname;
                    }
                
               }
          if(req.body.type){
               if(req.body.type.snacktype){
                    snack.type.snacktype=req.body.type.snacktype;
               }
               if(req.body.type.brand){
                    snack.type.brand=req.body.type.brand;
               }
               
          }
          
          await snack.save();
           res.json(snack);
          }
          catch(err){
          res.json({message:err});
         }
});






module.exports= router;