import { useEffect, useState } from "react"
import { Comanda } from "./Comanda";


export function MesaPedido({ numero }) {
    const [data, setData] = useState('')


    const dataToChild = () => {
        setData("teste")
    }


    /*simulação do JSON vindo do banco de dados */
    let mesas = [
        {
            key:0,
            id: 1,
            numero: 1,
            pedido: 1,
        },
        {
            key:1,
            id: 2,
            numero: 2,
            pedido: 3,
        },
        {
            key:2,
            id: 3,
            numero: 3,
            pedido: 3
        },
        {
            key:3,
            id: 4,
            numero: 4,
            pedido: 4
        }
    ]

    useEffect(()=>{

    })

    const [comanda, setComanda] = useState({})

    const dataToComanda = (id, numero, pedido)=>{
        setComanda({id: 0, numero: 0, pedido: 0})
    }


    return (
        <div className="flex ">
            {mesas.map(mesa => {
                return <button className="w-3/4 m-5 h-28 border border-solid border-black hover:bg-red-700 bg-red-500 touch-auto"
                key={mesa.key} onClick={() =>  setComanda({id: mesa.id, numero: mesa.numero, pedido: mesa.pedido})}>
                    Mesa {mesa.numero} <br />
                </button>
            })
            }

            <Comanda id={comanda.id} numero={comanda.numero} pedido={comanda.pedido} />
        </div>
    )
}/*dataToComanda(mesa.id, mesa.numero, mesa.pedido)  */