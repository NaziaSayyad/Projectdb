const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id:Number,
    product_url :{type:String, required : true} ,
    description:{type:String, required : true},
    price:{type:Number, required : true}
 });

 const Users = mongoose.model("user", userSchema);

 module.exports = Users;
 