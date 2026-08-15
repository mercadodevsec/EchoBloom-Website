import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 3001),
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
  uploadDir: process.env.UPLOAD_DIR ?? './uploads',
  smtpHost: process.env.SMTP_HOST,
  smtpPort: Number(process.env.SMTP_PORT ?? 587),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  smtpFrom: process.env.SMTP_FROM ?? 'noreply@echobloom.org',
  notifyEmail: process.env.NOTIFY_EMAIL ?? 'EchoBloom@echo.com',
};
