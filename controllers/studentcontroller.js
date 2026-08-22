const student=require("../models/student.js");
const student={
    home:(req,res)=>{
        res.render("home")
    },
    getstudents:async(req,res)=>{
        const allstudents = await student.find();
        res.render("student",{allstudents});
    },
    insertpage:(req,res)=>{
        res.render("form");
    },
    createstudent:async(req,res)=>{
        req.body.ip=req.ip;
        await student.create(req.body);
        res.redirect("/getdata");
    },
    editpage:async(req,res)=>{
        await student.findById(req.params.userid);
        res.render("edit",{data});

    },
    updatestudent:async(req,res)=>{
        await student.findByIdAndUpdate(req.params.userid,req.body,{
            new:true
        });
        res.redirect("/getdata")
    },
    deletestudent:async(req,res)=>{
        await student.findByIdAndDelete(req.id);
        res.redirect("/getdata");
    }
}
module.exports=studentcontroller;