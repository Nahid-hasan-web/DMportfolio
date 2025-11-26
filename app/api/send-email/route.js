import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, name, phone, city , address, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'nahidhasan.cit.bd@gmail.com',  // Gmail/SMTP user
        pass:'tvzm unxl pdjs gwnf',  // App password
      },
    });

    const mailOptions = {
      from:email,
      to: "nahidhasan.cit.bd@gmail.com",
     subject: `New Contact Message Name: ${name} Email: ${email} ...`,
      text: message,
      html:`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333333;
      text-align: center;
    }
    .info {
      margin: 10px 0;
    }
    .info strong {
      display: inline-block;
      width: 90px;
      color: #555;
    }
    .message {
      margin-top: 20px;
      padding: 15px;
      background-color: #f0f0f0;
      border-radius: 5px;
      line-height: 1.5;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Contact Message</h2>
    <div class="info"><strong>Name:</strong> ${name}</div>
    <div class="info"><strong>Email:</strong> ${email}</div>
    <div class="info"><strong>Phone:</strong> ${phone}</div>
    <div class="info"><strong>Address:</strong> ${address}</div>
    <div class="info"><strong>City:</strong> ${city}</div>
    <div class="message"><strong>Message:</strong><br/>${message}</div>
    <div class="footer">
      This message was sent from your website contact form.
    </div>
  </div>
</body>
</html>`
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, msg: "Email sent!" });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error });
  }
}
