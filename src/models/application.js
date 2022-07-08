import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.ObjectId,
      ref: "job",
    },

    email: String,
    names: String,
    phone: String,
    coverLetter: String,
    resume: String,
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default:"pending"
    },
  },
  { timestamps: true }
);
ApplicationSchema.pre(/^find/, function(next){
  this.populate({ path: "job" });
  next();
});
const applicationInfo = mongoose.model("application", ApplicationSchema);

export default applicationInfo;
