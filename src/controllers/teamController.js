import bcrypt from "bcrypt";
import TeamInfo from "../models/team";


class TeamController {
  //Create user

  static async createTeamate(req, res) {
    const user = await TeamInfo.create(req.body);

    if (!user) {
      return res.status(404).json({ error: "user not registered" });
    }
    return res
      .status(200)
      .json({ message: "teammate created successfully", data: user });
  }

  static async getallTeam(req, res) {
    const users = await TeamInfo.find(req.body);
    if (!users) {
      return res.status(400).json({ error: "user not registerd" });
    }
    return res.status(200).json({ message: "user is found", data: users });
  }
  
  static async deleteOneTeamate(req, res) {
    const users = await TeamInfo.findByIdAndDelete(req.params.id);
    if (!users) {
      return res.status(400).json({ error: "user not deleted" });
    }

    return res.status(200).json({ message: "user is deleted" });
  }
  //login function
  static async userLogin(req, res) {
    const user = await TeamInfo.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      user.password = null;
      const token = tokenAuth.tokenGenerator({ user: user });
      return res.status(200).json({
        message: "user succesfully logged in",
        token: token,
        data: user,
      });
    }
    return res.status(400).json({ error: "password is wrong" });
  }
  
}

export default TeamController;