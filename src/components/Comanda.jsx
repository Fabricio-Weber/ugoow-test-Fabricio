

export  function Comanda({id,numero,pedido}) {
    return (
        <div className=" border border-solid border-black p-4 ">
            <div className="w-full h-10 mt-1">
                <h4 className="font-bold text-3xl">Comanda {id} </h4>
                <p className="text-sm mb-1">Abertura ##/##/#### ##:##:##</p>
            </div>

            <div className="w-full h-1/2 mt-5">
                <div className="flex-row w-full">
                    <p className=" text-xl">Valor Itens:</p>
                    <p className="text-xl">R$ </p>
                    <p className="text-xl">Taxa Serviço: R$ 00</p>
                </div>

                <div>
                    <label className=" text-xl">Desconto R$
                        <input />
                    </label>
                </div>

                <div>
                    <p className="text-xl font-bold">Total: R$ 00,00</p>
                    <label className=" text-xl">Forma de Pagamento</label>
                    <select className=" text-xl">
                        <option>Dinheiro</option>
                        <option>Credito</option>
                        <option>Débito</option>
                        <option>PIX</option>
                    </select>
                </div>

                <div >
                    <button className="border border-solid border-black text-xl bg-red-600">Fechar Comanda</button>
                </div>

                <div>
                    <h4 className="font-bold text-3xl mt-5">Pedido</h4>
                </div>

                <div className=" text-xl">
                    <ul>
                        <div >
                            <p>##/##/#### ##:##:##</p>
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
                            <button className="border border-solid border-black">Editar</button>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
    /* */
}