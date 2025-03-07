import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { contactSchema } from "@/app/ValidationSchema";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse the request body as JSON
    const body = await request.json();

    // 2. Validate incoming data with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // 3. Compose the email message
    const emailOptions = {
      ...mailOptions,
      subject: "New Contact Form Submission",
      text: `
New Contact Submission:

Name: ${name} 
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message || "N/A"}
      `.trim(),
    };

    // 4. Send the email
    const info = await transporter.sendMail(emailOptions);
    console.log("Email sent successfully:", info);

    // 5. Return a success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
