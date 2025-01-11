import { Request, Response, NextFunction } from "express";
import { prisma } from "../../config/prisma.js";

const wishlistController = {
  addToWishlist: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, userId } = req.body;

      const existingWishlistItem = await prisma.wishlist.findFirst({
        where: { courseId, userId },
      });

      if (existingWishlistItem) {
        return res.status(400).json({
          success: false,
          message: "Course is already in the wishlist.",
        });
      }

      const wishlistItem = await prisma.wishlist.create({
        data: { courseId, userId },
      });

      res.status(201).json({
        success: true,
        message: "Course added to wishlist.",
        data: wishlistItem,
      });
    } catch (error) {
      next(error);
    }
  },

  getWishlist: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = parseInt(req.params.userId, 10);

      const wishlistItems = await prisma.wishlist.findMany({
        where: { userId },
        include: { course: true },
      });

      res.status(200).json({
        success: true,
        data: wishlistItems,
      });
    } catch (error) {
      next(error);
    }
  },

  removeFromWishlist: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { wishlistId } = req.body;

      const wishlistItem = await prisma.wishlist.findUnique({
        where: { id: wishlistId },
      });

      if (!wishlistItem) {
        return res.status(404).json({
          success: false,
          message: "Wishlist item not found.",
        });
      }

      await prisma.wishlist.delete({
        where: { id: wishlistId },
      });

      res.status(200).json({
        success: true,
        message: "Course removed from wishlist.",
      });
    } catch (error) {
      next(error);
    }
  },
};

export default wishlistController;
