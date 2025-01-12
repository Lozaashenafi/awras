import { Router } from "express";
import wishlistController from "./wishlistController";
import errorHandler from "../../middleware/error.js";

const wishlistRouter = Router();


wishlistRouter.post('/add', errorHandler(wishlistController.addToWishlist));
wishlistRouter.get('/:userId', errorHandler(wishlistController.getWishlist));
wishlistRouter.delete('/remove', errorHandler(wishlistController.removeFromWishlist));

export default wishlistRouter;
