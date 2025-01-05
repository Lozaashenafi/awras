import { User, Category } from '@prisma/client'
import express from 'express'
declare module 'express'{
   export interface Request {
      user?: User
      category?:Category
  
   }
}
