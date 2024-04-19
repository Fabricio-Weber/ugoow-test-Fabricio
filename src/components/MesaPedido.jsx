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
            pedido: 5648328,
            valor: 50,
            servico: 10,
            data: "25/10/2024",
            hora: "19:45:10"
        },
        {
            key:1,
            id: 2,
            numero: 2,
            pedido: 4562341,
            valor: 100,
            servico: 15,
            data: "25/10/2024",
            hora: "19:45:10"
        },
        {
            key:2,
            id: 3,
            numero: 3,
            pedido: 354324335,
            valor: 245,
            servico: 20,
            data: "01/02/2024",
            hora: "21:10:41"
        },
        {
            key:3,
            id: 4,
            numero: 4,
            pedido: 4532431,
            valor: 666,
            servico: 60,
            data: "07/09/2024",
            hora: "12:19:10"
        }
    ]

    useEffect(()=>{

    })

    const [comanda, setComanda] = useState({})

    const dataToComanda = (id, numero, pedido,valor,servico,data,hora)=>{
        setComanda({id: 0, numero: 0, pedido: 0,valor:0,servico: 0,data:"", hora:""})
    }


    return (
        <div className="flex ">
            {mesas.map(mesa => {
                return <button className="w-3/4 m-5 h-28 rounded-xl hover:bg-orange-700 text-slate-50 bg-orange-600 touch-auto"
                key={mesa.key} onClick={() =>  setComanda({id: mesa.id, 
                                                           numero: mesa.numero, 
                                                           pedido: mesa.pedido,
                                                           valor: mesa.valor, 
                                                           data: mesa.data,
                                                           servico: mesa.servico, 
                                                           hora:mesa.hora})}>
                    Mesa {mesa.numero} <br />
                </button>
            })
            }

            <Comanda id={comanda.id} numero={comanda.numero} pedido={comanda.pedido} valor={comanda.valor} data={comanda.data} servico={comanda.servico} hora={comanda.hora} />
        </div>
    )
}/*dataToComanda(mesa.id, mesa.numero, mesa.pedido)  */