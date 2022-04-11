import express from "express";
import TeamController from "../controllers/teamController";



const userRouter = express.Router(); 	
//  userRouter.post("/register",
//  datachecker.isEmailExist,
//  Validator.newAccountRules(),
//  Validator.ValidatorInput,
//   UserController.createUser)
  

userRouter.post("/register", TeamController.createTeamate)

userRouter.get("/all",TeamController.getallTeam)
userRouter.delete("/:id",TeamController.deleteOneTeamate)
userRouter.put("/:id", TeamController.updateOneTeammate)


export default userRouter;