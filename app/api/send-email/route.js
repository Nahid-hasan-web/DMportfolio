import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, name, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // Gmail/SMTP user
        pass: process.env.EMAIL_PASS,  // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-receive-email@example.com",
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, msg: "Email sent!" });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error });
  }
}
