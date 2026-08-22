const mongoose=require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    district:String,
    pincode:Number,
    state:String,
    gender:String
});
module.exports=mongoose.model("student",studentSchema);