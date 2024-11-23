import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';
import { D1Database } from '@cloudflare/workers-types';

export const createPrismaClient = (db: D1Database) => {
  return new PrismaClient({
    adapter: new PrismaD1(db)
  });
}; 