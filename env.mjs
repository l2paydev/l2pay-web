import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform(value => value === 'true'),
    GITHUB_URL: z.string().url(),
  },
  shared: {
    NODE_ENV: z.enum(['development', 'production']),
    BASE_URL: z.string().url(),
    API_RATE_USD: z.string().url(),
    WEBSITE_URL: z.string().url(),
    GITHUB_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    BASE_URL: process.env.NEXT_PUBLIC_API || 'https://testnet.l2pay.ing/api',
    API_RATE_USD:
      process.env.NEXT_PUBLIC_API_RATE_USD || 'https://tonapi.io/v2',
    WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://l2pay.ing',
    GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
