import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type GetPageProps = {
  slug: string
}

export const getPage = ({ slug }: GetPageProps) => {
  return prisma.page
    .findUnique({ select: { id: true }, where: {} })
    .then((data) => data)
}
