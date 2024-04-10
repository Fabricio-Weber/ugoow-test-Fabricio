import { useState } from "react"
import { Comanda } from "./Comanda";


export  function MesaPedido(){
    const [data, setData] = useState('')


    const dataToChild= () =>{
        setData("teste") 


        
    }

    return(
    <div className="w-full border border-solid flex columns-2 border-black p-4"> 
        <button className="w-2/12 m-16 h-28 border border-solid border-black hover:bg-red-700 bg-red-500 touch-auto"
               onClick={() => dataToChild}>
            Mesa <br/>  
        </button>

        <Comanda dataToChild={data}/> 
    </div>
    )
}