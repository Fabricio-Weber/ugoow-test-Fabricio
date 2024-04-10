import { RadioButton } from "@phosphor-icons/react/dist/ssr";
import { Input } from "postcss";

import { Comanda } from "../components/Comanda";
import { MesaPedido } from "../components/MesaPedido";
import { useEffect, useState } from "react";

export function Mesas() { 
  const [mesa, setMesa] = useState([])



  return ( 


    <div className=" w-full h-full">

      <div>
        <div className="flex w-full m-2">
          <h1 className="text-4xl font-inter text-slate-800 font-semibold">Mesas e Comandas</h1>
        </div>
      </div>
      
      <div className="flex m-auto  h-5/6 w-3/4">
        <MesaPedido/>
      </div>

    </div>

  )
}