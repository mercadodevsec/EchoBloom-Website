import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

const transporter =
  env.smtpHost && env.smtpUser
    ? nodemailer.createTransport({
        host: env.smtpHost,
        port: env.smtpPort,
        secure: env.smtpPort === 465,
        auth: {
          user: env.smtpUser,
          pass: env.smtpPass,
        },
      })
    : null;

export async function sendNotification(subject: string, text: string) {
  if (!transporter) {
    console.info('[email:skipped]', subject, text);
    return;
  }

  await transporter.sendMail({
    from: env.smtpFrom,
    to: env.notifyEmail,
    subject,
    text,
  });
}
