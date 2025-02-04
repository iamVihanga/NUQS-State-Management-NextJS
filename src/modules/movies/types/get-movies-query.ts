import { z } from "zod";

export const querySchema = z.object({
  query: z.string().optional(),
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(10),
});

export type QuerySchema = z.infer<typeof querySchema>;
