import { z } from "zod";

export const contactSchema = z.object({
  name: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().min(1, { message: "First Name is required" })
  ),

  email: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().email({ message: "Invalid email address" })
  ),
  phone: z
    .string()
    .optional()
    .transform((val) => (val ? val.trim() : val)),
  message: z
    .string()
    .optional()
    .transform((val) => (val ? val.trim() : val)),
});
