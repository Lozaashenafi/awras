import { Router } from "express";
import courseController from "./courseController";
import  errorHandler  from "../../middleware/error.js";

const courseRouter = Router();


courseRouter.post('/register',errorHandler(courseController.createCourse))

export default courseRouter;
