import GetDataSql from "./api/getDataSql"

export default async function Home() {

  const data = await GetDataSql()

  return (
  <div>
    <h1>Data do Banco de Dados:</h1>
    {data}
  </div>
  
  )
}