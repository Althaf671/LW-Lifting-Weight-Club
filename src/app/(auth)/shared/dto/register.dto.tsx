// register.dto.tsx

import { z } from "zod";

// client register dto
export const RegisterDto = z.object({
    name: z.string()
    .min(8, { error: "8 character minimum" })
    .max(16, { error: "16 character maximum" }),
    email: z.email({ error: "Invalid credentials" }),
    password: z.string().min(8, { error: "8 charater minimum" })
    .refine(val => /[A-Z]/.test(val), { message: "Must be atleast 1 uppercase"}) 
    .refine(val => /[a-z]/.test(val), { message: "Must be atleast 1 lowercase"})
    .refine(val => /[0-9]/.test(val), { message: "Must be atleast 1 number"}) 
    .refine(val => /[^A-Za-z0-9]/.test(val), { message: "Must be atleast a symbol"})
}).strict();

export type TRegisterDto = z.infer<typeof RegisterDto>;