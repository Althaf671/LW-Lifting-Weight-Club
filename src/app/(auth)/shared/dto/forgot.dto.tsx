// forgot.password.dto.tsx

import z from "zod";

export const ForgotPasswordDto = z.object({
    email: z.email({ error: "Invalid credentials" })
}).strict();

export type TForgotPassword = z.infer<typeof ForgotPasswordDto>;