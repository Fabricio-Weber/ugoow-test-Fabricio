import { useState } from "react"
import { Comanda } from "./Comanda";


export  function MesaPedido({numero}){
    const [data, setData] = useState('')


    const dataToChild= () =>{
        setData("teste")   
    }


    return(
    <div className=""> 
        <button className="w-3/4 m-5 h-28 border border-solid border-black hover:bg-red-700 bg-red-500 touch-auto"
               onClick={() => dataToChild}>
            Mesa {numero} <br/>  
        </button>
    </div>
    )
}