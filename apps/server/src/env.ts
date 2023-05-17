import { z } from 'zod'

export const getEnvWith =
  <S extends z.ZodTypeAny>(schema: S) =>
  (env: unknown = process.env): z.infer<S> => {
    const result = schema.safeParse(env)

    if (!result.success) {
      throw new Error(
        `Invalid environment variable: ${JSON.stringify(result.error.errors)}`
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.data
  }

const EnvSchema = z.object({
  PORT: z.coerce.number().int().min(1024).optional().default(3000),
})

export type Env = z.infer<typeof EnvSchema>

export const getEnv = getEnvWith(EnvSchema)
