import { RadioButton } from "@phosphor-icons/react/dist/ssr";
import { Input } from "postcss";

import { Comanda } from "../components/Comanda";
import { MesaPedido } from "../components/MesaPedido";

export function Mesas() { 
  return ( 
    <div className=" w-full h-full">

      <div>
        <div className="flex w-full m-2">
          <h1 className="text-4xl font-inter text-slate-800 font-semibold">Mesas e Comandas</h1>
        </div>
      </div>
      
      <div className="flex m-auto columns-2 h-5/6 w-3/4">
        <MesaPedido/>
        <Comanda/>
      </div>

    </div>

  )
}