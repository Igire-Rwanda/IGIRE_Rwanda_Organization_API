import programInfos from "../models/program.";
 class programController {

    static async createprograms(req, res) {
        const programs = await productsInfos.find();
    
        if (!programs) {
          return res.status(404).json({ error: "program not created" });
        }
        return res
          .status(200)
          .json({ message: "programs create successfully", data: programs});
      }
 }
 export default programController;
