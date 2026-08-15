import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  organization: z.string().optional(),
  roleInterest: z.string().optional(),
  message: z.string().min(10),
  website: z.string().max(0).optional(),
});

export const internApplicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  coverLetter: z.string().optional(),
  website: z.string().max(0).optional(),
});
