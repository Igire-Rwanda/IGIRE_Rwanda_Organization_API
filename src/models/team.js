import Mongoose from "mongoose";
const userSchema = new Mongoose.Schema(
  {
    title: String,
    image: String,
    Position: String,
    description: String,
    email:{
      type: String,
      unique:true,
    },
    role: {
      type: String,
      default: "teammate",
      enum: ["admin", "teammate"],
    },
  },
  {
    timestamps: true,
  }
);
const user = Mongoose.model("team", userSchema);

export default user;
