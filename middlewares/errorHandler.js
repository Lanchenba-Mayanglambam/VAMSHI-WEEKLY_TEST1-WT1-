const error=(req,res,next,err)=>{
    console.log(err)
   next();

}
module.exports=errorHandler;
    
