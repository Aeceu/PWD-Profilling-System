import { z } from "zod";
import validator from "validator";

export const adminSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be atleast 2 characters")
    .max(45, "First name must be less than 45 characters")
    .regex(new RegExp("^[a-zA-Z ]+$"), "No special character allowed"),
  lastName: z
    .string()
    .min(2, "Last name must be atleast 2 characters")
    .max(45, "Last name must be less than 45 characters")
    .regex(new RegExp("^[a-zA-Z ]+$"), "No special character allowed"),
  email: z.string().email("Invalid Email"),
  phone: z
    .string()
    .refine(validator.isMobilePhone, "Please enter a valid phone number"),
  username: z
    .string()
    .min(6, "Username must be atleast 6 characters")
    .max(45, "Username must be less than 45 characters"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(50, "Password must be less than 50 characters"),
  role: z.enum(["Administrative", "Employee"], {
    invalid_type_error: "Please select your position!",
  }),
});

export const adminSchemaWithID = z
  .object({
    id: z.string(),
  })
  .merge(adminSchema);

export const adminLoginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(50, "Password must be less than 50 characters"),
});
