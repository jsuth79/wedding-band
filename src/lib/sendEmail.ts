import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER and SMTP_PASS environment variables are not set");
  }
  return nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

interface EnquiryData {
  name: string;
  email: string;
  eventDate: string;
  eventType: string;
  message: string;
}

export async function sendEnquiryEmail(data: EnquiryData) {
  const { name, email, eventDate, eventType, message } = data;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function escapeHtml(str: string) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeEventType = escapeHtml(eventType);
  const safeMessage = escapeHtml(message);

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `Website Enquiry <${process.env.SMTP_USER}>`,
    to: process.env.ENQUIRY_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `New Enquiry: ${safeEventType} on ${formattedDate}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #44403c; border-bottom: 2px solid #e11d48; padding-bottom: 10px;">
          New Booking Enquiry
        </h1>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px 0; color: #78716c; width: 140px;">Name:</td>
            <td style="padding: 10px 0; color: #1c1917;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Email:</td>
            <td style="padding: 10px 0; color: #1c1917;">
              <a href="mailto:${safeEmail}" style="color: #e11d48;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Event Type:</td>
            <td style="padding: 10px 0; color: #1c1917;">${safeEventType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Event Date:</td>
            <td style="padding: 10px 0; color: #1c1917;">${formattedDate}</td>
          </tr>
        </table>

        <div style="background: #fafaf9; padding: 20px; border-left: 4px solid #e11d48; margin: 20px 0;">
          <h3 style="color: #44403c; margin-top: 0;">Message:</h3>
          <p style="color: #1c1917; white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
        </div>

        <p style="color: #78716c; font-size: 14px; margin-top: 30px;">
          This enquiry was submitted via the website contact form.
        </p>
      </div>
    `,
  });

  return { success: true };
}
