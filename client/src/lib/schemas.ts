import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  organization: z.string().optional(),
  roleInterest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const internApplicationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.string().optional(),
  portfolioUrl: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  linkedinUrl: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  coverLetter: z.string().optional(),
  website: z.string().max(0).optional(),
});

export type InternApplicationFormData = z.infer<typeof internApplicationSchema>;

export const impactApplicationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  organization: z.string().optional(),
  academicStatus: z.string().optional(),
  programPosition: z.string().optional(),
  linkedinUrl: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  portfolioUrl: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  website: z.string().max(0).optional(),
});

export type ImpactApplicationFormData = z.infer<typeof impactApplicationSchema>;
