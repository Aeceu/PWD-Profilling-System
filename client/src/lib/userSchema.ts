import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

export const userSchema = z
  .object({
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(45, { message: "Last name must be less than 45 characters" })
      .regex(/^[a-zA-Z ]+$/, {
        message: "No special character allowed in last name",
      }),
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .max(45, { message: "First name must be less than 45 characters" })
      .regex(/^[a-zA-Z ]+$/, {
        message: "No special character allowed in first name",
      }),
    middleName: z
      .string()
      .min(2, { message: "Middle name must be at least 2 characters" })
      .max(45, { message: "Middle name must be less than 45 characters" })
      .regex(/^[a-zA-Z ]+$/, {
        message: "No special character allowed in middle name",
      }),
    suffix: z.string().nullable(),
    age: z.string().min(1, "Required"),
    birthdate: z.string().min(1, "Required"),
    birthplace: z.string().min(1, "Required"),
    gender: z.string().min(1, "Required"),
    religion: z.string().min(1, "Required"),
    citizenship: z.string().min(1, "Required"),
    civil: z.string().min(1, "Required"),

    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(1, "Required"),
    landline: z.string().nullable(),

    houseno: z.string(),
    street: z.string().min(1, "Required"),
    baranggay: z.string().min(1, "Required"),
    district: z.string(),
    city: z.string().min(1, "Required"),
    province: z.string(),
    zipcode: z.string(),

    elementary: z.string().min(1, "Required"),
    attain: z.string().min(1, "Required"),
    highschool: z.string().min(1, "Required"),
    attain1: z.string().min(1, "Required"),
    senior: z.string().min(1, "Required"),
    attain2: z.string().min(1, "Required"),
    college: z.string().min(1, "Required"),
    attain3: z.string().min(1, "Required"),

    employment: z.string().min(1, "Required"),
    occupation: z.string().nullable(),
    yearEmploy: z.string().nullable(),
    skill1: z.string().nullable(),
    skill2: z.string().nullable(),
    yearUnemploy: z.string().nullable(),
    skill1_1: z.string().nullable(),
    skill2_1: z.string().nullable(),

    blood: z.string().min(1, "Required"),
    height: z.string().min(1, "Required"),
    weight: z.string().min(1, "Required"),

    disability: z.string().min(1, "Required"),
    visibility: z.string().min(1, "Required"),
    made_disabled: z.string().min(1, "Required"),
    status: z.string().min(1, "Required"),
    device: z.string().min(1, "Required"),
    specificDevice: z.string().optional(),
    medicine: z.string().min(1, "Required"),
    specificMedicine: z.string().optional(),
    others: z.string().nullable(),

    emergencyPerson: z
      .object({
        firstName: z
          .string()
          .min(2, {
            message:
              "Emergency person's first name must be at least 2 characters",
          })
          .max(45, {
            message:
              "Emergency person's first name must be less than 45 characters",
          })
          .regex(/^[a-zA-Z ]+$/, {
            message:
              "No special character allowed in emergency person's first name",
          }),
        middleName: z
          .string()
          .min(2, {
            message:
              "Emergency person's middle name must be at least 2 characters",
          })
          .max(45, {
            message:
              "Emergency person's middle name must be less than 45 characters",
          })
          .regex(/^[a-zA-Z ]+$/, {
            message:
              "No special character allowed in emergency person's middle name",
          }),
        lastName: z
          .string()
          .min(2, {
            message:
              "Emergency person's last name must be at least 2 characters",
          })
          .max(45, {
            message:
              "Emergency person's last name must be less than 45 characters",
          })
          .regex(/^[a-zA-Z ]+$/, {
            message:
              "No special character allowed in emergency person's last name",
          }),
        suffix: z.string().nullable(),

        age: z.string().min(1, "Required"),
        gender: z.string().min(1, "Required"),
        relationship: z.string().min(1, "Required"),
        religion: z.string().min(1, "Required"),

        email: z.string().nullable(),
        phone: z.string().min(1, "Required"),
        landline: z.string().nullable(),

        houseno: z.string(),
        street: z.string().min(1, "Required"),
        baranggay: z.string().min(1, "Required"),
        district: z.string(),
        city: z.string().min(1, "Required"),
        province: z.string(),
        zipcode: z.string(),
      })
      .nullable(),

    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be atleast 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });
