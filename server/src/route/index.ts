import { Router } from "express";
import userRouter from "../api/user/userRoute";
import categoryRouter from "../api/category/categoryRoute";
import courseRouter from "../api/course/courseRoute";
const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/category", categoryRouter);
appRouter.use("/course",courseRouter)

export default appRouter;