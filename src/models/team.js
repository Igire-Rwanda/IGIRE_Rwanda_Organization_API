import Mongoose from "mongoose";
const userSchema = new Mongoose.Schema(
  {
    names: String,
    // profileImage: String,
    Position: String,
    description: String,
  },
  {
    timestamps: true,
  }
  
);
const user = Mongoose.model("MeetwithTeam", userSchema);

export default user;
