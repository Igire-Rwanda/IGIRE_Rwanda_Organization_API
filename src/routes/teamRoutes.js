import express from "express";
import TeamController from "../controllers/teamController";




const userRouter = express.Router(); 	
//  userRouter.post("/register",
//  datachecker.isEmailExist,
//  Validator.newAccountRules(),
//  Validator.ValidatorInput,
//   UserController.createUser)

userRouter.post("/register",TeamController.createTeamate)
userRouter.get("/all",TeamController.getallTeam)
userRouter.patch("/:id", TeamController.updateOneTeammate)
userRouter.delete("/:id",TeamController.deleteOneTeamate)


export default userRouter;