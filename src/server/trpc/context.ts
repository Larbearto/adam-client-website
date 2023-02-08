import { type inferAsyncReturnType } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { prisma } from '../db/client'

type CreateContextOptions = Record<string, never>

export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    prisma
  }
}

export const createContext = async (opts: CreateNextContextOptions) => {
  const { res, req } = opts
  return {
    res,
    req,
    prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
