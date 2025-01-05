import { z } from 'zod';

export const categorySchema = {
  register: z.object({
    name: z.string().min(1).max(255),
  }),
  update: z.object({
    name: z.string().min(1).max(255).optional(),

  }),
};