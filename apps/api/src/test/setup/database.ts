import { createPrismaClient } from '../../shared/factories/prismaClient'
import { D1Database } from '@cloudflare/workers-types'

export const createTestDatabase = async (db: D1Database) => {
  const prisma = createPrismaClient(db)
  await prisma.$connect()

  return {
    prisma,
    cleanup: async () => {
      await prisma.$disconnect()
    }
  }
}
