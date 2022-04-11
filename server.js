import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import teamRoutes from "./src/routes/teamRoutes";
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use("/team",teamRoutes);

app.use("/",(req,res) => res.status(200).json({
    message:"this is api"
}));
const dburl=process.env.DATABASEURL;

mongoose.connect(dburl,{
    
} ).then(()=>console.log("database connected successfully"))
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
export default app;