import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function Teste() {
  const data = await prisma.teste.findMany()
  console.log(data)

  return {
    props: {
      dataTeste: JSON.stringify(data)
    }
  }
}