// dashboard.dto.tsx

import z from "zod";

export const UserDashboardDto = z.object({
    data: z.object({
        
    }),
}).strict();

export type TDashboard = z.infer<typeof UserDashboardDto>;