import { z } from 'zod';

const userSchema = {
  register: z.object({
    password: z.string().min(6),
    email: z.string().email(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
    
  login: z.object({
    password: z.string().min(6),
    email: z.string().email(),
  }),
}
  export default userSchema;