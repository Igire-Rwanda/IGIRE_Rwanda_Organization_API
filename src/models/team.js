import Mongoose from "mongoose";
const userSchema = new Mongoose.Schema(
  {
    title: String,
    image: String,
    Position: String,

    description: {
      type: String,
      required: true,
      unique: true,
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

const user = Mongoose.model("User", userSchema);


export default user;