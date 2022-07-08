import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import teamRoutes from "./src/routes/teamRoutes";
import jobRoute from "./src/routes/jobRouter";
import applicationRouter from "./src/routes/applicationRouter"
dotenv.config('./.env');


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use("/team",teamRoutes);
app.use("/job", jobRoute);
app.use("/admin/job",applicationRouter)


app.use("/",(req,res) => res.status(200).json({
    message:"this is api"
}));
const dburl=process.env.DATABASEURL;

Mongoose.connect(dburl,{
    usenewurlparser: true,
    useunifiedtopology: true,
   
    
} ).then(()=>console.log("database connected successfully"))
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
export default app;