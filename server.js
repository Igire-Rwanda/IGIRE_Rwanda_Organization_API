import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import teamRoutes from "./src/routes/teamRoutes";
dotenv.config('./.env');


const app = express();
app.use(cors());
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.use('/uploads', express.static('./uploads'))
// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//     next();
// });
app.use("/team",teamRoutes);

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