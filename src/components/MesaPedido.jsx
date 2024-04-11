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
            valor: 50,
            data: "25/10/2024",
            hora: "19:45:10"
        },
        {
            key:1,
            id: 2,
            numero: 2,
            pedido: 3,
            valor: 100,
            data: "25/10/2024",
            hora: "19:45:10"
        },
        {
            key:2,
            id: 3,
            numero: 3,
            pedido: 3,
            valor: 245,
            data: "01/02/2024",
            hora: "21:10:41"
        },
        {
            key:3,
            id: 4,
            numero: 4,
            pedido: 4,
            valor: 666,
            data: "07/09/2024",
            hora: "12:19:10"
        }
    ]

    useEffect(()=>{

    })

    const [comanda, setComanda] = useState({})

    const dataToComanda = (id, numero, pedido,valor,data,hora)=>{
        setComanda({id: 0, numero: 0, pedido: 0,valor:0,data:"", hora:""})
    }


    return (
        <div className="flex ">
            {mesas.map(mesa => {
                return <button className="w-3/4 m-5 h-28 border border-solid border-black hover:bg-red-700 bg-red-500 touch-auto"
                key={mesa.key} onClick={() =>  setComanda({id: mesa.id, 
                                                           numero: mesa.numero, 
                                                           pedido: mesa.pedido,
                                                           valor: mesa.valor, 
                                                           data: mesa.data, 
                                                           hora:mesa.hora})}>
                    Mesa {mesa.numero} <br />
                </button>
            })
            }

            <Comanda id={comanda.id} numero={comanda.numero} pedido={comanda.pedido} valor={comanda.valor} data={comanda.data} hora={comanda.hora} />
        </div>
    )
}/*dataToComanda(mesa.id, mesa.numero, mesa.pedido)  */