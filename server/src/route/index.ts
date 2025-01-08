import { Router } from "express";
import userRouter from "../api/user/userRoute";
const appRouter = Router();

appRouter.use("/user", userRouter);

export default appRouter;