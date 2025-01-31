import { NextFunction, Request, Response } from "express";
import nodemailer from "nodemailer"
const contactController = {
sendEmail: async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phoneNumber, subject, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.EMAIL_PASSWORD, 
        },
    });

    const mailOptions = {
        from: email,
        to: 'contact@awrasacademy.org', 
        subject: subject,
        text: `You have a new message from ${firstName} ${lastName} (${phoneNumber}): ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
}}
export default contactController;