import nodemailer from 'nodemailer';

export async function POST(req, res) {
  try {
    const { name, email, message, type , topic} = await req.json();
    const user = process.env.EMAIL;
    const pass = process.env.PASS;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      secure: true,
      port: process.env.SMTP_PORT,
      auth: { user, pass }
    });

    await transporter.sendMail({
      to: user,
      subject: `keyboardos.com ${type} ${topic}`,
      html: `<h1>Name</h1><p>${name}</p><h2>Email</h2><p>${email}</p><h2>Message</h2><p>${message}</p>`,
    });


    return new Response("Mail Successfully sended", { status: 200 })
  } catch (error) {
    console.error(error);
    return new Response(error, { status: 500 })
  }
}