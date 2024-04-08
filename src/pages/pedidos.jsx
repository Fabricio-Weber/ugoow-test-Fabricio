import { useState } from "react"
import { ProductItem } from "../components/ProductItem"

export function Pedidos() {

  const [filtro, setFiltro] = useState("")

  const handleFilter = (value) => { 
    setFiltro(value)
    console.log(filtro)
  }
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      nome: "produto name",
      estado: "recebido",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id: 2,
      nome: "produto 2",
      estado: "entregue",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id: 3,
      nome: "produto 3",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id: 3,
      nome: "produto 4",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id: 3,
      nome: "produto 5",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    }
    
  ])



  function ContentCollum({ nome, cor, children }) {
    return (
      <div className="w-4/12 h-[90%] bg-slate-100 shadow-lg rounded shadow-slate-300 overflow-hidden divide-y-4 ">
        <header className={`w-full h-10 bg-${cor}-300 p-2 text-center shadow-md  shadow-slate-200`}>
          <p className="font-bold text-slate-800 text-xl">{nome}</p>
        </header>
        <div className="w-full h-[90%] overflow-y-auto">{children}</div>
      </div>
    )
  }



  return (
    <div className="w-full h-full flex flex-col justify-between">
      <header className="w-full mb-10">
        <div className="w-full h-12 bg-slate-300 flex justify-between items-center rounded-t-md p-2 ">
          <div className="flex items-center">
            <h1 className="font-bold text-3xl text-slate-600">Pedidos</h1> <span className="ml-5 bg-red-600 p-1 rounded-md text-slate-200 font-extrabold select-none">fechado</span>
          </div>
          <button>Lançar pedido</button>
          <button>Caixa</button>
        </div>

        <div className="w-full h-20 bg-slate-400 flex justify-between items-center rounded-b-md p-2">

          <button className="py-2 px-4 bg-slate-600 text-white font-semibold rounded-md">pedidos hoje(0)</button>
          <button className="py-2 px-4 bg-slate-800 text-white font-semibold rounded-md">pedidos ontem(0)</button>
          <input onChange={e =>  handleFilter(e.target.value)} className="w-2/6 h-10 indent-5 outline-none py-6 text-2xl text-slate-900 rounded-md" type="text" placeholder="Filtrar por nome ou id..." />
          <button className="py-2 px-4 bg-slate-300 rounded-md">cancelados</button>
          <button className="py-2 px-4 bg-slate-300 rounded-md">Entregues</button>
        </div>
      </header>

      <div className="w-full h-full flex flex-row justify-between gap-4">
        <ContentCollum nome="Recebidos" cor="yellow">
          {pedidos.filter(pedido => pedido.estado === "recebido" && (filtro === ''  ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
        <ContentCollum nome="Aceitos" cor="orange">
          {pedidos.filter(pedido => pedido.estado === "aceito" && (filtro === ''  ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
        <ContentCollum nome="Entregues" cor="green">
          {pedidos.filter(pedido => pedido.estado === "entregue" && (filtro === ''  ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
      </div>

    </div>
  )
}