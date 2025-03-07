// config/nodemailer.ts
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail's SMTP service
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email, // Sender's email address
  to: email, // Recipient's email address (your email)
};
