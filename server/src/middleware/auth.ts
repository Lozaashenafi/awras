
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/secrete";
import { prisma } from "../config/prisma.js";
import { UserRole, User } from "@prisma/client";


const isAuthUser:any = async (req:Request,res:Response,next:NextFunction)=>{
   const token = req.headers.authorization;
   if(!token){
     return;
   }
   try {
      const payload = await jwt.verify(token, SECRET!) as any;
      const user =  await prisma.user.findUnique({
         where:{
            id:(payload).id
         }
      })
      if(!user){
         return res.status(404).json({success: false,message: 'user not found',});
      }
      req.user =user;
    
      next();
   } catch (error) {
    return res.status(403).json({success: false,message: 'invalide token',});
   }

}

const isAdmin: any = async (req: Request, res: Response, next: NextFunction) => {
    const user: User | undefined = req.user;
    if (!user) {
       return res.status(401).json({ success: false, message: 'User not authenticated' });
    }
 
    const userRoles = await prisma.userRole.findMany({
       where: { userId: user.id },
       include: { role: true },  
    });
 
    const isAdmin = userRoles.some(userRole => userRole.role.roleName === 'Admin');
    if (!isAdmin) {
       return res.status(401).json({ success: false, message: 'User is not an admin' });
    }
 
    next();
 };
 
export {isAuthUser,isAdmin};