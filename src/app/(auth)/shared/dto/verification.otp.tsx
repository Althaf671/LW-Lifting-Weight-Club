// otp.verification.dto.tsx

import { z } from "zod";

export const VerificationDto = z.object({
    otp: z.string()
    .length(6, { error: "OTP must be 6 characters" })
    .regex(/^[0-9]+$/, { error: "OTP must be a number" })
}).strict();

export type TVerification = z.infer<typeof VerificationDto>;