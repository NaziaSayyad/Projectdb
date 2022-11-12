const express = require("express");
const Users = require("./user.model");

const app = express.Router();


app.get("/", async (req,res)=>{
   let users = await Users.find();
   res.send(users);
}); 

app.get("/:id", async (req,res)=>{
    let id = req.params.id;
    try{
      let users = await Users.findById(id);
    if(!users){
      res.send("User not found");
    }

    else{
    res.send(users);
    }

    }
    catch (e){ 
         res.send(e.message)
    }
    

 }); 
//  post 
 app.post("/", async (req,res)=>{
   try{
      let user = await Users.create({
         ...req.body,
         
      });
      res.send(user);
   }
   catch (e){
         res.status(404).send(e.message);
   }
 
}); 
// delete 
app.delete("/:id", async (req,res)=>{
   let id = req.params.id;
   let users = await Users.findByIdAndDelete(id);
   if(users){
      res.send("User delted sucesfully ")
   }
   else{
      res.send("cannot delete a user ")
   }
}); 
// Patch 
app.get("/:id", async (req,res)=>{
   let id = req.params.id;
   let users = await Users.findByIdAndUpdate( id, req.body, {new:true});
   res.send(users);
}); 


 module.exports = app;
