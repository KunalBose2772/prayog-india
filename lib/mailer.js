import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  auth: {
    user: "your@email.com",
    pass: "password",
  },
});

export async function sendMail(to, subject, html) {
  await transporter.sendMail({
    from: '"Prayog India" <your@email.com>',
    to,
    subject,
    html,
  });
}
