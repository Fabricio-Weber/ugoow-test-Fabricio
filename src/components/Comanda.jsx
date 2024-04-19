import { useState } from "react"


export function Comanda({ id, numero, pedido, valor,servico, data, hora }) {



    return (
        <div className=" border border-solid border-black p-4 bg-gray-800 text-slate-50 ">
            <div className="w-full h-10 mt-1">
                <h4 className="font-bold text-2xl">Comanda  #{pedido}</h4>
                <p className="text-sm mb-1">Abertura {data} {hora}</p>
            </div>

            <div className="w-full h-1/2 mt-5">
                <div className="flex-row w-full">
                    <p className=" text-xl">Valor Itens:</p>
                    <p className="text-xl">R${valor} </p>
                    <p className="text-xl">Taxa Serviço: R$ {servico}</p>
                </div>

                <div>
                    <label >
                        <input className="placeholder-orange-600" placeholder="Desconto R$" />
                    </label>
                    <button className="bg-orange-600 rounded-xl" >aplicar desconto</button>
                </div>

                <div>
                    <p className="text-xl font-bold">Total: R$ {valor}</p>
                    <label className=" text-xl">Forma de Pagamento</label>
                    <select className=" text-xl">
                        <option>Dinheiro</option>
                        <option>Credito</option>
                        <option>Débito</option>
                        <option>PIX</option>
                    </select>
                </div>

                <div >
                    <button className=" text-xl bg-orange-600 rounded-xl">Fechar Comanda</button>
                </div>

                <div>
                    <h4 className="font-bold text-3xl mt-5">Pedido</h4>
                </div>

                <div className=" text-xl">
                    <ul>
                        <div >
                            <p>{data} {hora}</p>
                            <p>ss</p>
                            <p>Itens</p>
                        </div>
                        <span>
                            <li>
                                <span>
                                    XX -
                                    <span >
                                        Nome do produto
                                    </span>
                                </span>
                            </li>
                            <button className="bg-orange-600 rounded-xl">Editar</button>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
    /* */
}