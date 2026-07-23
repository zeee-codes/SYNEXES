import { z } from "zod";

// ─── Auth Schemas ────────────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
});
export type SignupInput = z.infer<typeof signupSchema>;

// ─── API Response Schemas ────────────────────────────────────────
export const apiSuccessSchema = z.object({
  success: z.literal(true),
  data: z.unknown(),
});

export const apiErrorSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string(),
    message: z.string(),
  }),
});

export const apiResponseSchema = z.discriminatedUnion("success", [
  apiSuccessSchema,
  apiErrorSchema,
]);
export type ApiResponse = z.infer<typeof apiResponseSchema>;

// ─── Pagination ──────────────────────────────────────────────────
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});
export type PaginationInput = z.infer<typeof paginationSchema>;
