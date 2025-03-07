<<<<<<< HEAD
// config/nodemailer.ts
=======
>>>>>>> 9bbd1be314f67557fe723e9e0b805327fc9f8e64
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
<<<<<<< HEAD
  service: "gmail", // Use Gmail's SMTP service
  auth: {
    user: email,
    pass,
=======
  host: "smtpout.secureserver.net", // GoDaddy's SMTP server
  port: 465, // Secure SSL port
  secure: true, // Use SSL
  auth: {
    user: email,
    pass: pass,
>>>>>>> 9bbd1be314f67557fe723e9e0b805327fc9f8e64
  },
});

export const mailOptions = {
<<<<<<< HEAD
  from: email, // Sender's email address
  to: email, // Recipient's email address (your email)
=======
  from: email,
  to: email,
>>>>>>> 9bbd1be314f67557fe723e9e0b805327fc9f8e64
};
