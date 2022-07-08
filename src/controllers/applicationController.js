import applicationInfo from "../models/application";
import jobInfo from "../models/job";

class ApplicationController {
  static createApplicantion = async (req, res) => {
    const job = await jobInfo.findById(req.params.id);

    if (!job) {
      return res.status(400).json({ status: 400, message: "Job not exist" });
    } else if (!job.isactive) {
      return res
        .status(400)
        .json({ status: 400, message: "Job application is closed" });
    }

    req.body.job = req.params.id;

    const Application = await applicationInfo.create(req.body);

    if (!Application) {
      return res.status(400).json({
        status: 400,
        message: "failed to create application",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "application created successfully",
      data: Application,
    });
  };
  static getAllApplications = async (req, res) => {
    const applications = await applicationInfo.find();
    if (!applications) {
      return res.status(404).json({
        status: 404,
        message: "applications not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "applications retrieved successfully",
      data: applications,
    });
  };
  static getOneApplicantion = async (req, res) => {
    const application = await applicationInfo.findById(req.params.id);

    if (!application) {
      res.status(404).json({
        status: 404,
        message: "application not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "application retrieved successfully",
      data: application,
    });
  };
  static updateOneApplication = async (req, res) => {
    const application = await applicationInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!application) {
      res.status(404).json({
        status: 404,
        message: "failed to update application",
      });
    }
    res.status(200).json({
      status: 200,
      message: "application updated successfully",
      data: application,
    });
  };
  static deleteOneApplication = async (req, res) => {
    const application = await applicationInfo.findByIdAndDelete(req.params.id);

    if (!application) {
     return res.status(404).json({
        status: 404,
        message: "application not deleted",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "application deleted successfully",
      data: application,
    });
  };
}

export default ApplicationController;
