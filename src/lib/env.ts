import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
});

const env = envSchema.parse(process.env);

// Export the result so we can use it in the project
export default env;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
