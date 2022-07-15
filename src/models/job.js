import mongoose from "mongoose";
import { stringify } from "querystring";


const JobSchema= new mongoose.Schema({
    title:String,
    discription:String,
    deadline:Date,
    location:String,
    language:String,
    skills:String,
    jobType:{
    type:String,
        enum:["job","tender"],
        default:"job",
    },
    aboutAplicant:String,
    applicantWork:String,
    applicantRequirement:String,
    positions:Number,
    pictures:String,
    price:String,
    isactive:{
        type:Boolean,
        default:false,

    },
   


},
{timestamps:true}
);

const jobInfo= mongoose.model("job", JobSchema);
export default jobInfo;
