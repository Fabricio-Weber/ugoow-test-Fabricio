import { User, Clock, PencilSimple, TrashSimple, ArrowRight, X, Check } from "@phosphor-icons/react"
import { createPortal } from "react-dom"
import { toReal } from "../utils/toReal"
import { useState } from "react"
import { ModalBase } from "./ModalBase"
import { InputText } from "./InputText"

export function ProductItem({ id, nome, preco, tipo }) {

  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  return (
    <div className="w-full bg-slate-300 scale-95 rounded-md shadow-md shadow-slate-400 overflow-hidden  flex flex-col justify-between">
      <header className="h-12 bg-slate-700 w-full flex flex-row items-center text-slate-200 font-bold p-2 gap-2 justify-between">
        <User weight="bold" size={20} /><h1 className="text-xl block truncate w-[10em]">{nome}</h1>
        <span className="h-full border-l-[1px]" ></span>
        <div className="hidden sm:flex gap-[2px] items-center"><Clock weight="bold" size={20} />
          <p className="block">12:23:12</p></div>
        <div className="flex items-center h- gap-1 bg-slate-800 p-1 rounded-md relative left-1">
          <button onClick={() => setEditOpen(!editOpen)} className="size-8 rounded-md hover:bg-slate-300 bg-slate-200
         flex items-center justify-center active:bg-opacity-90"><PencilSimple className="text-orange-600" weight="bold" size={20} /></button>
          <button onClick={() => setDeleteOpen(!editOpen)} className="size-8 rounded-md hover:bg-slate-300 bg-slate-200
         flex items-center justify-center active:bg-opacity-90"><TrashSimple className="text-red-600" weight="bold" size={20} /></button>
        </div>
      </header>

      <div className="flex justify-between items-center mt-2 p-2">
        <p className="bg-slate-100 text-orange-700 font-bold px-2 align-top py-1 rounded-lg text-xl">{tipo}</p>
        <p className="font-bold text-3xl text-slate-800 relative bottom-2">{toReal(preco)}</p>
      </div>


      {/* Actions */}
      <div className="w-full flex justify-between text-[1.1em] font-bold text-slate-900 p-2 " >
        <div className="flex gap-2 items-center">
          <button className="bg-orange-400 px-4 h-8 rounded-lg hover:brightness-75 transition-all">Cancelar</button>
          <button className="bg-orange-600 px-4 h-8 rounded-lg hover:brightness-90 transition-all">Avançar</button>
        </div>

        <button className=" flex bg-orange-800 px-4 h-8 rounded-lg hover:brightness-90 transition-all text-slate-100">pronto<ArrowRight size={24} weight="bold" /></button>
      </div>
      {editOpen && createPortal(
        <ModalBase onClose={() => setEditOpen(false)}>
          <div className="w-full px-6">
            <h1 className="text-2xl font-inter font-bold text-slate-900">Editar cliente</h1>
            <div className="flex flex-col  w-full sm:w-1/2 gap-3">
              <InputText text={nome} name={"Nome"} />
              <InputText text={preco} name={"Preço"} />
              <InputText text={tipo} name={"Tipo"} />
            </div>
            <button onClick={()=> setEditOpen(false)} className="flex items-center absolute bottom-8 p-3 bg-blue-500 rounded transition hover:bg-opacity-95 text-slate-900 font-bold" ><Check size={26} weight="bold"/> Alterar</button>

          </div>
        </ModalBase>, document.body
      )}

      {
        deleteOpen && createPortal(
          <ModalBase onClose={() => setDeleteOpen(false)}> 
            <h1 className="text-2xl font-inter font-bold text-slate-900 mb-3">Voce tem certeza que deseja excluir esse pedido ?</h1>
            <div className="w-full h-3/5 bg-slate-300 rounded p-2" >
              <h2 className="flex gap-2 items-center"><User/> Nome : {nome}</h2>
              <p className="">{toReal(preco)}</p>
              <p className="">{tipo}</p>
            </div>
            <button onClick={() => setDeleteOpen(false)} className=" mr-2 mt-2 p-2 bg-red-600 rounded text-slate-100 font-bold">Deletar</button>
            <button onClick={() => setDeleteOpen(false)} className=" mr-2 mt-2 p-2 bg-blue-600 rounded text-slate-100 font-bold">Cancelar</button>
          </ModalBase>, document.body
        )
      }
    </div>
  )
}