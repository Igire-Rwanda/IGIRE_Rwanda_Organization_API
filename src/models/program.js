import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
    {
        ProgramName: String,
        description: String,
        video: [
            {
              type: String,
            },
          ],
    },
    {
        timestamps: true,
      }
)
const Programs = mongoose.model("programs", productsSchema);

export default Programs;

