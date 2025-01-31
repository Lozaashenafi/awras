import { Router } from "express";
import contactController from "./contactContrloller";
import  errorHandler  from "../../middleware/error.js";

const contactRouter = Router();


contactRouter.post('/sendEmail',errorHandler(contactController.sendEmail))

export default contactRouter;
