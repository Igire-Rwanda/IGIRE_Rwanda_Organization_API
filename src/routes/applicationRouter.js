import express from "express";
import ApplicationController from "../controllers/applicationController";

const applicationRoute = express.Router();

applicationRoute.post("/apply/:id", ApplicationController.createApplicantion);
applicationRoute.get("/applications", ApplicationController.getAllApplications);
applicationRoute.get("/:id", ApplicationController.getOneApplicantion);
applicationRoute.patch("/:id", ApplicationController.updateOneApplication);
applicationRoute.delete("/:id", ApplicationController.deleteOneApplication);
export default applicationRoute;
