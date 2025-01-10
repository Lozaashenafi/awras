import { Router } from "express";
import categoryController from "./categoryController";
import  errorHandler  from "../../middleware/error.js";

const categoryRouter = Router();


categoryRouter.post('/register',errorHandler(categoryController.register))
categoryRouter.get('/getAll',errorHandler(categoryController.getAll))
categoryRouter.put('/update/:id',errorHandler(categoryController.update))
categoryRouter.delete('/delete/:id',errorHandler(categoryController.delete))

export default categoryRouter;
