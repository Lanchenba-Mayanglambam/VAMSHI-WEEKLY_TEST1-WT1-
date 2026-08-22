 const fs=require("fs");
 const path=require("path")

 const logger=(req,res,next)=>{
    const log= `
    Time   : ${new Date().toLocaleString}
    Method : ${req.method}
    URL    : ${req.orginalUrl}
    IP     : ${req.ip}
    `;
    

  
      fs.appendFile=(req,res,next)=>{
         path.join(__dirname,"log.text");
         next();
         
      },log; if(err)console.log(err)
      }
      module.exports=logger;

        
          
         
       
    
      