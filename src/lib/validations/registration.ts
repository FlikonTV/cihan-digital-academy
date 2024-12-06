import * as z from "zod";

export const registrationFormSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  organization: z.string().optional(),
});

export type RegistrationFormData = z.infer<typeof registrationFormSchema>;