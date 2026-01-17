import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email configuration environment variables");
      return NextResponse.json(
        { error: "Server configuration error: Missing email credentials" },
        { status: 500 }
      );
    }

    // Create transporter (reuse for both emails)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 1. Email to Admin with form details
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission - Laprrk Associates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0047AB; border-bottom: 2px solid #0047AB; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Phone:</strong> ${phone}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong> ${email}
            </p>
            ${service ? `
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Service:</strong> ${service}
            </p>
            ` : ''}
            ${message ? `
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Message:</strong>
            </p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${message}
            </p>
            ` : ''}
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Laprrk Associates contact form.
          </p>
        </div>
      `,
    };

    // 2. Auto-reply email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Laprrk Associates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0047AB 0%, #0066CC 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              We have received your message and truly appreciate you reaching out to <strong>Laprrk Associates</strong>.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #0047AB; margin: 20px 0;">
              <p style="margin: 0; color: #555; font-size: 15px;">
                <strong>What happens next?</strong>
              </p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>.
              </p>
            </div>
            
            <div style="margin: 25px 0;">
              <p style="color: #666; font-size: 14px; margin-bottom: 10px;"><strong>Your submission details:</strong></p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; background: #f8f9fa; border: 1px solid #e0e0e0; width: 30%;"><strong>Name:</strong></td>
                  <td style="padding: 8px; border: 1px solid #e0e0e0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; background: #f8f9fa; border: 1px solid #e0e0e0;"><strong>Phone:</strong></td>
                  <td style="padding: 8px; border: 1px solid #e0e0e0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; background: #f8f9fa; border: 1px solid #e0e0e0;"><strong>Email:</strong></td>
                  <td style="padding: 8px; border: 1px solid #e0e0e0;">${email}</td>
                </tr>
                ${service ? `
                <tr>
                  <td style="padding: 8px; background: #f8f9fa; border: 1px solid #e0e0e0;"><strong>Service:</strong></td>
                  <td style="padding: 8px; border: 1px solid #e0e0e0;">${service}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 25px 0;">
            
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              In the meantime, feel free to explore our services or reach out to us directly:
            </p>
            
            <div style="text-align: center; margin: 20px 0;">
              <p style="margin: 5px 0; color: #555;">
                📞 <strong>Phone:</strong> <a href="tel:9311407461" style="color: #0047AB; text-decoration: none;">9311407461</a> / <a href="tel:8800975636" style="color: #0047AB; text-decoration: none;">8800975636</a>
              </p>
              <p style="margin: 5px 0; color: #555;">
                📧 <strong>Email:</strong> <a href="mailto:laprrkassociates@gmail.com" style="color: #0047AB; text-decoration: none;">laprrkassociates@gmail.com</a>
              </p>
              <p style="margin: 5px 0; color: #555;">
                📍 <strong>Address:</strong> FF-95, Gaur City Center, Greater Noida West, UP - 201318
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/919311407461" style="display: inline-block; background: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated confirmation email from Laprrk Associates.<br>
              Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions),
      ]);
    } catch (mailError) {
      console.error("Nodemailer sendMail failed:", mailError);
      throw mailError; // Re-throw to be caught by outer catch
    }

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    // Return more specific error message if available
    const errorMessage = error.message || "Failed to send email";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
