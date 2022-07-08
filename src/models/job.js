import mongoose from "mongoose";
import { stringify } from "querystring";


const JobSchema= new mongoose.Schema({
    title:String,
    discription:String,
    deadline:Date,
    location:String,
    language:String,
    skills:String,
    aboutAplicant:String,
    applicantWork:String,
    applicantRequirement:String,
    positions:Number,
    pictures:String,
    price:String,
    isactive:{
        type:Boolean,
        default:true,

    },
   


},
{timestamps:true}
);

const jobInfo= mongoose.model("job", JobSchema);
export default jobInfo;