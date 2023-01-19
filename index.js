const mongoose=require("mongoose")
const express=require("express")
const bodyparser=require("body-parser")
const Userdatas=require("./Models/model")
const multer=require("multer")
const cors=require("cors")
const port=process.env.port||8080
mongoose.connect('mongodb+srv://ROOT:10xacademy@cluster0.qncoifz.mongodb.net/?retryWrites=true&w=majority',
(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("database connected")
    }
}
)
const app=express()
app.use("/Images",express.static("./Images"))
app.use(cors())
app.use(bodyparser.json())
app.use(express.json())

const Storage=multer.diskStorage({
    destination:"./Images",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:Storage
})

app.get("/getposts", async (req,res)=>{
    try{
        const data=await Userdatas.find()
        res.status(200).json({
            status:"success",
            data
        })
    }
    catch(e){
        res.status(400).json({
            status:"error",
            message:e.message
        })
  
    }
   
})
app.post("/post",upload.single('image'),async(req,res)=>{
    try{
        const data= await Userdatas.create({
            name:req.body.name,
            location:req.body.location,
            description:req.body.description,
            likes:req.body.likes,
            image:req.file.filename
        })
        console.log("data created")
        res.status(200).json({
            status:"success",
            message:data
        })
    }
    catch(e){
        res.status(400).json({
            status:"errror",
            message:e.message
        })
    }
})

app.listen(port,()=>console.log("server is up and running"))
