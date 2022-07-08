// import job from "../models/job";
import jobInfo from "../models/job";

class jobController {
  //create job

  static createJob = async (req, res) => {
    const job = await jobInfo.create(req.body);

    if (!job) {
      return res.status(400).json({
        status: 400,
        message: "failed to create job",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "job created successfully",
      data: job,
    });
  };

  static getAllJobs = async (req, res) => {
    const jobs = await jobInfo.find();

    if (!jobs) {
      return res.status(404).json({
        status: 404,
        message: "jobs not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "jobs retrieved successfully",
      data: jobs,
    });
  };
  static getOneJob = async (req, res) => {
    const job = await jobInfo.findById(req.params.id);

    if (!job) {
      res.status(404).json({
        status: 404,
        message: "job not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "job retrieved successfully",
      data: job,
    });
  };

  static updateOneJob = async (req, res) => {
    const job = await jobInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!job) {
      res.status(404).json({
        status: 404,
        message: "job not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "job updated successfully",
      data: job,
    });
  };
  static deleteOneJob = async (req, res) => {
    const job = await jobInfo.findByIdAndDelete(req.params.id);

    if (!job) {
     return res.status(404).json({
        status: 404,
        message: "job not deleted",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "job deleted successfully",
      data: job,
    });
  };
}
export default jobController;
