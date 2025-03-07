import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse the request body as JSON
    const body = await request.json();

    console.log("This is body", body);

    // 2. Validate incoming data with Zod
    if (!body.name) {
      return NextResponse.json(
        { success: false, message: "Name is required" },
        { status: 400 }
      );
    } else if (!body.email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    } else if (!body.message) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    } else if (body.email && !body.email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // 3. Compose the email message
    const emailOptions = {
      ...mailOptions,
      subject: "New Contact Form Submission",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin: auto;">
        <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have received a new message from your website's contact form.</p>

        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "N/A"}</p>
        </div>

        <p style="text-align: center; font-size: 14px; color: #888; margin-top: 20px;">This email was automatically generated. Please do not reply.</p>
      </div>
    </div>
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
