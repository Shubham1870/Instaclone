const mongoose=require("mongoose")

const Schema=mongoose.Schema

const instaschema=new Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
   date:{type:Date,default:Date.now},
   likes:{type:Number,required:true},
})

const Userdatas=mongoose.model("UserData",instaschema)

module.exports=Userdatas

