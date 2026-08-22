const express=require("express");
const connectDB=require("./config/db");
const authHandler=require("./middlewares/authHandlers");
const errorHandler=require("./middlewares/errorHandler");
const logger=require("./middlewares/logger");
const studentRoutes=require("./routes/studentRoutes");

const app =express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use(logger);
app.use(errorHandler);
app.use(authHandler);
app.use("/",studentRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000...!")
});


