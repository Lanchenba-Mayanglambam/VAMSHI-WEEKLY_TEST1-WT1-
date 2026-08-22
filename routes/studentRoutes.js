const express=require(express);
const controllers=require("../controllers/studentcontroller");

const router=express.Router();

router.get("/", studentRoutes.home)
router.get("/getdata", studentRoutes.getstudents)
router.get("/insertdata", studentRoutes.insertpage)
router.post("/createdata",studentRoutes.createstudent)
router.get("/editdata/userid",studentRoutes.editstudent)
router.post("/updatedata/userid",studentRoutes.updatestudent)
router.get("/deletedata/id", studentRoutes.deletestudent)

module.exports=router;


