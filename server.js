import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import sendFunc from "./src/utils/email"
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json())


app.post('/email',(req,res)=>{
    console.log(req.body);
    sendFunc(req.body)
    res.json({message:'Message received!'})






});
// const dburl=process.env.DATABASEURL;

// mongoose.connect(dburl,{
    
// } ).then(()=>console.log("database connected successfully"))
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})


export default app;