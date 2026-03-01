import { z } from "zod";

export const baseApplicantSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  pronouns: z.string().optional().default(""),
  location: z.string().optional().default(""),
  timeZone: z.string().optional().default(""),
  goals: z.string().min(10, "Please share a bit more about your goals"),
  languages: z.string().optional().default(""),
  availability: z.string().optional().default(""),
  linkedIn: z.string().optional().default(""),
  website: z.string().optional().default(""),
  notes: z.string().optional().default(""),
  // honeypot
  company: z.string().optional().default("")
});

export const menteeSchema = baseApplicantSchema.extend({
  arrivalAge: z.string().min(1, "Arrival age is required"),
  school: z.string().min(1, "School is required"),
  major: z.string().optional().default(""),
  gradYear: z.string().optional().default(""),
  eligibilityConfirm: z.boolean()
});

export const mentorSchema = baseApplicantSchema.extend({
  role: z.string().min(1, "Role is required"),
  industry: z.string().min(1, "Industry is required"),
  mentoringExperience: z.string().optional().default(""),
  canCommit: z.boolean()
});

export const partnerSchema = z.object({
  orgName: z.string().min(1, "Organization is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional().default("")
});

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional().default("")
});
