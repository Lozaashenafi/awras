import { Router } from "express";
import userController from "./userController.js";
import errorHandler from "../../middlewares/error.js";
const userRouter = Router();

userRouter.post('/register',errorHandler(userController.register));

export default userRouter;