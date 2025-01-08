import { NextFunction, Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import userSchema from "./userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../../config/secrete.js";
import { generatePassword } from "../../utils/generator.js"
import { sendEmail } from "../../utils/emailSender.js";

const userController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
  const data = userSchema.register.parse(req.body);
  //check if the email exists
  const isUserExist = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (isUserExist) {
    return res.status(404).json({
      success: false,
      message: "Email is already in use",
    });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = await prisma.user.create({
    data: {

      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: hashedPassword,
     username:data.email
      
    },
  });

  return res.status(200).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
},
  

login: async (req: Request, res: Response, next: NextFunction) => {
    const data = userSchema.login.parse(req.body);
    console.log("sdfvsf");
    
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
   
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    if (!bcrypt.compareSync(data.password, user.password)) {
      return res.status(404).json({
        success: false,
        message: "password is incorrect",
      });
    }
 
    console.log(user);
    
    const payload = {
      id: user.id,
      firstName: user.firstName,
    };
    console.log("kdajkn");
    
    const token = await jwt.sign(payload, SECRET!);

    return res.status(200).json({
      success: true,
      message: "user logged in successfully",
      data: user,
      token: token,
    });
  },
};
export default userController;