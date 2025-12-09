import emailjs from "@emailjs/browser";

// Initialize EmailJS
if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
}

export interface EmailFormData {
  from_name: string;
  from_email: string;
  subject?: string;
  message: string;
  reply_to?: string;
}

export const sendEmail = async (formData: EmailFormData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject || "New Message from A1 Tantra",
        message: formData.message,
        reply_to: formData.reply_to || formData.from_email,
      }
    );

    console.log("Email sent successfully:", response);
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

export const sendNewsletterSignup = async (email: string): Promise<boolean> => {
  return sendEmail({
    from_name: "A1 Tantra Newsletter",
    from_email: email,
    subject: "Newsletter Signup",
    message: `New newsletter signup from: ${email}`,
  });
};

export const sendBookingRequest = async (
  name: string,
  email: string,
  date: string,
  sessionType: string,
  notes?: string
): Promise<boolean> => {
  return sendEmail({
    from_name: name,
    from_email: email,
    subject: `Booking Request: ${sessionType}`,
    message: `
      Booking Request Details:
      Name: ${name}
      Email: ${email}
      Preferred Date: ${date}
      Session Type: ${sessionType}
      Additional Notes: ${notes || "None"}
    `,
  });
};

