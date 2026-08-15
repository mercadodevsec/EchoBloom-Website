import type { File } from 'multer';
import { PrismaClient } from '@prisma/client';
import { contactSchema, internApplicationSchema } from '../schemas.js';
import { sendNotification } from './email.service.js';

const prisma = new PrismaClient();

export async function createContactSubmission(input: unknown) {
  const data = contactSchema.parse(input);

  if (data.website) {
    throw new Error('Invalid submission');
  }

  const submission = await prisma.contactSubmission.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      organization: data.organization,
      roleInterest: data.roleInterest,
      message: data.message,
    },
  });

  await sendNotification(
    'New EchoBloom contact submission',
    `${data.firstName} ${data.lastName} (${data.email})\n\n${data.message}`,
  );

  return submission;
}

export async function createInternApplication(input: Record<string, unknown>, resume: File) {
  const data = internApplicationSchema.parse(input);

  if (data.website) {
    throw new Error('Invalid submission');
  }

  const application = await prisma.internApplication.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      university: data.university,
      major: data.major,
      graduationYear: data.graduationYear,
      portfolioUrl: data.portfolioUrl || null,
      linkedinUrl: data.linkedinUrl || null,
      coverLetter: data.coverLetter,
      resumeUrl: resume.path,
      resumeFileName: resume.originalname,
    },
  });

  await sendNotification(
    'New EchoBloom intern application',
    `${data.firstName} ${data.lastName} (${data.email})\nResume: ${resume.originalname}`,
  );

  return application;
}
