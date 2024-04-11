import { RadioButton } from "@phosphor-icons/react/dist/ssr";
import { Input } from "postcss";

import { Comanda } from "../components/Comanda";
import { MesaPedido } from "../components/MesaPedido";
import { useEffect, useState } from "react";

export function Mesas() {



    const [mesa, setMesa] = useState([])
    const [comanda, setComanda] = useState([])
    const [total, setTotal] = useState([])


    function handleComanda(value) {
        let comanda = {
            id: value.id,
            numero: value.numero,
            valor: value.valor
        }
    }

    /*useEffect que vai fazer a conexao com o banco de dados */
    useEffect(() => {

    })

    return (
        <div className=" w-full h-full">
            <div>
                <div className="flex w-full m-2">
                    <h1 className="text-4xl font-inter text-slate-800 font-semibold">Mesas e Comandas</h1>
                </div>
            </div>

            <div className="w-3/4 border border-solid flex columns-2 border-black p-4">
                |<MesaPedido />
            </div>

        </div>

    )
}