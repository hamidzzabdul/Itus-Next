import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = new PrismaClient();


declare const globalThis: {
    prismaGlobal: PrismaClient;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton;

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;