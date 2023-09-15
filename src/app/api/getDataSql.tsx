import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function GetDataSql() {

  const dataDados = await prisma.teste.findMany();

  return (
    <div>
      {dataDados.map((item) => (
        <li>{item.nome}</li>
      ))}
    </div>
  )
};


