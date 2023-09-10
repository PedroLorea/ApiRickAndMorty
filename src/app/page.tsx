"use client";

import { PrismaClient } from "@prisma/client";
import { useState } from 'react'
import { Teste } from "./api/page";



const prisma = new PrismaClient()

export async function getServerSideProps() {
 const data = await prisma.teste.findMany()

 return {
   props: { data
   }
 }
}



export default function Home({data}: any) {

  
  const [message, setMessage] = useState(data);
  

  console.log(data)

  const handleDatabaseOperation = async () => {
    try {
      const response = await fetch('/api');
      console.log(response)
      const data =  await response.json();

      setMessage(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <main>
      <button onClick={handleDatabaseOperation}>Fetch para o Sqlite</button>
      <hr />
      <div>
        Aqui vai a message: {message}
      </div>
    </main>
  )
}
