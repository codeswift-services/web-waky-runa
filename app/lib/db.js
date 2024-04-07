import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
// 	return new PrismaClient()
// }

// const globalForPrisma = globalThis

// const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

let prisma

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}

export default prisma
