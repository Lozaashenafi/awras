import { Router } from "express";
import userController from "./userController.js";
import errorHandler from "../../middleware/error.js";
const userRouter = Router();

userRouter.post('/register',errorHandler(userController.register));
userRouter.post('/login',errorHandler(userController.login));
userRouter.get('/getAll',errorHandler(userController.getAll));
export default userRouter;