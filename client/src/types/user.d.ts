import { z } from "zod";
import { userSchema } from "../lib/userSchema";

export type TUserSignup = z.infer<typeof userSchema>;
