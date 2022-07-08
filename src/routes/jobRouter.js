import express from "express";
import jobController from "../controllers/jobController";

const jobRoute = express.Router();

jobRoute.post("/createjob", jobController.createJob);
jobRoute.get("/alljobs", jobController.getAllJobs);
jobRoute.get("/:id", jobController.getOneJob);
jobRoute.patch("/:id", jobController.updateOneJob);
jobRoute.delete("/:id", jobController.deleteOneJob);

export default jobRoute;
