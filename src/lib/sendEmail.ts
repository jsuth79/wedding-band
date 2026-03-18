import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
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

  const resend = getResendClient();
  const { error } = await resend.emails.send({
    from: "Website Enquiry <enquiry@nicolamason.co.uk>",
    to: process.env.ENQUIRY_EMAIL || "hello@nicolamason.co.uk",
    replyTo: email,
    subject: `New Enquiry: ${eventType} on ${formattedDate}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #44403c; border-bottom: 2px solid #e11d48; padding-bottom: 10px;">
          New Booking Enquiry
        </h1>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px 0; color: #78716c; width: 140px;">Name:</td>
            <td style="padding: 10px 0; color: #1c1917;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Email:</td>
            <td style="padding: 10px 0; color: #1c1917;">
              <a href="mailto:${email}" style="color: #e11d48;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Event Type:</td>
            <td style="padding: 10px 0; color: #1c1917;">${eventType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c;">Event Date:</td>
            <td style="padding: 10px 0; color: #1c1917;">${formattedDate}</td>
          </tr>
        </table>

        <div style="background: #fafaf9; padding: 20px; border-left: 4px solid #e11d48; margin: 20px 0;">
          <h3 style="color: #44403c; margin-top: 0;">Message:</h3>
          <p style="color: #1c1917; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <p style="color: #78716c; font-size: 14px; margin-top: 30px;">
          This enquiry was submitted via the website contact form.
        </p>
      </div>
    `,
  });

  if (error) {
    throw error;
  }

  return { success: true };
}
