import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from '../database/schema'

export function useDrizzle() {
  return drizzle({
    // @ts-expect-error - Connection bullshit
    connection: {
      host: process.env.DATABASE_HOST!,
      port: Number(process.env.DATABASE_PORT!),
      user: process.env.DATABASE_USER!,
      password: process.env.DATABASE_PASSWORD!,
      database: process.env.DATABASE_NAME!,
      ssl: false
    }
  }, { schema })
}
