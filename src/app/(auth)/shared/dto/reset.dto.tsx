// reset.password.tsx

import { z } from "zod";

export const ResetPasswordDto = z.object({
    password: z.string().min(8, { error: "8 charater minimum" })
    .refine(val => /[A-Z]/.test(val), { message: "Must be atleast 1 uppercase"}) 
    .refine(val => /[a-z]/.test(val), { message: "Must be atleast 1 lowercase"}) 
    .refine(val => /[0-9]/.test(val), { message: "Must be atleast 1 number"}) 
    .refine(val => /[^A-Za-z0-9]/.test(val), { message: "Must be atleast a symbol"}),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    error: "Password does not match",
    path: ["confirmPassword"]
}).strict();

export type TResetPassword = z.infer<typeof ResetPasswordDto>;