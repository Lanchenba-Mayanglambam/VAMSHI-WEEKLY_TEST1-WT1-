const authHandler=(req,res,next)=>{
    console.log("authencation completed!")
    next();
}
module.exports=authHandler;