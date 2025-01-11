import { z } from 'zod';

export const wishlistSchema = {
  addToWishlist: z.object({
    courseId: z.number().int().positive(),
    userId: z.number().int().positive(),
  }),

  removeFromWishlist: z.object({
    wishlistId: z.number().int().positive(),
  }),

  getWishlist: z.object({
    userId: z.number().int().positive(),
  }),
};
