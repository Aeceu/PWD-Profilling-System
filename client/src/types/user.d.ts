import { z } from "zod";
import { userLoginSchema, userSchema } from "../lib/userSchema";

export type TUserSignup = z.infer<typeof userSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
