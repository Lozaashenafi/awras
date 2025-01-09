import { Router } from "express";
import userRouter from "../api/user/userRoute";
import categoryRouter from "../api/category/categoryRoute";
const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/category", categoryRouter);


export default appRouter;