const mongoose = require('mongoose'); 
 
const snackSchema= mongoose.Schema({
     name:{
          firstname:{
               type:String,
               required:true}
               
          
     },
     type:{
          snacktype:{
               type:String,
               required:true},
          brand:{
               type:String,
               required:true}
                         
           
}
});



 module.exports=mongoose.model('Snack',snackSchema); 