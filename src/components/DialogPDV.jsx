import { useEffect, useState } from "react"
import { RadioOption } from "./RadioOption"
import { FormVenda } from "./formComponents/FormVendaDelivery"

export function DialogPDV({ onClose, total }) {

  const [tipoPedido, setTipoPedido] = useState('')



  
// Resolver o problema de reenderização de componete, sla oq seja isso

  return (
    <div className="absolute bg-black bg-opacity-50 w-full h-full z-30 top-0 left-0 flex justify-center items-center">
      <div className="w-full h-full sm:w-4/5 sm:h-4/5 rounded-xl p-4 sm:p-8 bg-slate-200 z-20 shadow-inner relative transition-[width]  overflow-y-auto">

        <div className="w-full relative">
          <div className="flex items-start flex-wrap justify-between">
            <button className="bg-red-600 text-sm sm:text-xl text-slate-100 font-bold font-inter rounded-md px-4 py-2 mb-1" onClick={onClose} >Fechar</button>
            <h1 className="text-md ms:text-xl font-inter font-bold text-slate-100 bg-lime-700  inline-block p-2 rounded-lg mb-1">Total do pedido : R${total}</h1>
          </div>

          <div className="flex flex-wrap gap-2  w-auto mt-5 left-0 bg-slate-300 p-3 sm:py-6 sm:w-full rounded-md">
            <RadioOption size={"md"} nome="Delivery" group={"tipoVenda"} changeFood={e=>setTipoPedido(e)}/>
            <RadioOption size={"md"} nome="Retirada" group={"tipoVenda"} changeFood={e=>setTipoPedido(e)}/>
            <RadioOption size={"md"} nome="Local" group={"tipoVenda"} changeFood={e=>setTipoPedido(e)}/>
          </div>

        <FormVenda/>
          
        </div>
      
      </div>
      
    </div>

  )
}