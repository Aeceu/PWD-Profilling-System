import { z } from "zod";
import {
  adminLoginSchema,
  adminSchema,
  adminSchemaWithID,
} from "../lib/adminSchema";

export type TAdminSignup = z.infer<typeof adminSchema>;
export type TAdminLogin = z.infer<typeof adminLoginSchema>;
export type TAdmin = z.infer<typeof adminSchemaWithID>;
