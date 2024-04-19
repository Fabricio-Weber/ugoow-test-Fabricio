import { useState, useContext } from "react"
import { ProductItem } from "../components/ProductItem"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { ThemeContext } from "../contexts/collapse_context"
import { OptionButtom } from "../components/optionButom"

export function Pedidos() {

  const [filtro, setFiltro] = useState("")



  const handleFilter = (value) => {
    setFiltro(value)
    console.log(filtro)
  }
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      nome: "João Gabriel do Prado Schianti",
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
      id: 7,
      nome: "produto 3",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id:63,
      nome: "produto 4",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    },
    {
      id: 5,
      nome: "produto 5",
      estado: "aceito",
      preco: 1234,
      tipo_pagamento: "pix"
    }

  ])



  function ContentCollum({ nome, children }) {
    let cor 
    switch(nome) { 
      case "Recebidos" : 
      cor = "bg-lime-600"
      break
      case "Aceitos" :
      cor = "bg-amber-600"
      break
      default :
      cor =  "bg-rose-600"
      break
    }
    return (
      <div className={`w-full sm:w-4/12 h-auto sm:h-[90%] shadow-lg rounded-t-xl bg-slate-50 shadow-slate-300 overflow-visible sm:overflow-hidden divide-y-4 relative `}>
        <header className={`w-full h-12 ${cor} p-2 text-start indent-3 shadow-md static`}>
          <p className="font-extrabold text-slate-100 text-xl">{nome}</p>
        </header>
        <div className="w-full h-[90%] overflow-y-visible sm:overflow-y-auto">{children}</div>
      </div>
    )
  }



  return (

    <div className="w-full sm:w-full h-full  flex flex-col justify-between sm:p-4">
      <h1 className="text-orange-600 font-semibold text-4xl flex items-center gap-3 mb-0 sm:mb-6 p-2 sm:p-0">Gerenciamento de Pedidos <span className="bg-green-700 text-sm text-slate-100 p-2 rounded-full">Aberto</span></h1>
      <div className="flex items-center p-2 sm:p-0"> <input onChange={e => handleFilter(e.target.value)} className="peer w-full sm:w-2/6 indent-5 outline-none py-1 text-md text-slate-900 rounded-md ring-1 ring-slate-400 focus-visible:ring-orange-600" type="text" placeholder="Filtrar por nome ou id..." />
      <MagnifyingGlass className="relative right-7 text-slate-400 peer-focus-visible:text-orange-600 "  weight="bold"/></div>


      <div className="flex gap-1 my-4 mx-1">
         <OptionButtom group="viewState" name="ontem"/>
         <OptionButtom group="viewState" name="hoje"/>
         <OptionButtom group="viewState" name="cancelos"/>
      </div>

      <div className="w-full sm:w-11/12  h-[75dvh] sm:h-full flex m-auto flex-col mx-1  sm:flex-row gap-4 overflow-y-scroll sm:overflow-y-hidden">
        <ContentCollum nome="Recebidos" cor="yellow">
          {pedidos.filter(pedido => pedido.estado === "recebido" && (filtro === '' ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
        <ContentCollum nome="Aceitos" cor="orange">
          {pedidos.filter(pedido => pedido.estado === "aceito" && (filtro === '' ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
        <ContentCollum nome="Entregues" cor="green">
          {pedidos.filter(pedido => pedido.estado === "entregue" && (filtro === '' ? pedido.nome === pedido.nome : pedido.nome.toUpperCase().substring(0, filtro.length) === filtro.toUpperCase())).map(pedido => {
            return <ProductItem key={pedido.id} id={pedido.id} nome={pedido.nome} preco={pedido.preco} tipo={pedido.tipo_pagamento} />
          })}
        </ContentCollum>
      </div>

    </div>
  )
}