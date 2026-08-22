const mongoose = require("mongoose");

const connectDB=async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/collegedb");
    console.log("mongoDB is connected")
    } catch(err){
        console.log(error);
    }

}
module.exports=connectDB;