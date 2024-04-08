import { RadioButton } from "@phosphor-icons/react/dist/ssr";
import { Input } from "postcss";

export function Mesas() { 
  return ( 
    <div className=" w-full h-full">
      <div>
        <div className="flex w-full m-2">
          <h1 className="text-3xl font-inter text-slate-800 font-semibold">Mesas e Comandas</h1>
        </div>
      </div>
      

      <div className="flex m-auto columns-2 h-5/6 w-3/4">
          <div className="w-1/2 border border-solid border-black">
            <div>
              <h4 className="font-bold text-lg">Teste1</h4>
            </div>
            
          </div>

          <div className="w-1/2 border border-solid border-black">
            <div className="w-full h-10 mt-1">
              <h4 className="font-bold text-lg">Comanda #</h4>
              <p className="text-sm mb-1">Abertura ##/##/#### ##:##:##</p>
            </div>

            <div className="w-full h-1/2 mt-1">
              <div>
                <p>Valor Itens:</p>
                <p>R$ 00,00</p>
                <p>Taxa Serviço: R$ 00,00</p>
              </div>

              <div>
                <label>Desconto R$
                  <input/>
                </label>
              </div>

                <div>
                  <p>Total: R$ 00,00</p>
                  <label>Forma de Pagamento</label>
                    <select>
                      <option>Dinheiro</option>
                      <option>Credito</option>
                      <option>Débito</option>
                      <option>PIX</option>
                    </select>
                </div>

                <div>
                  <button className="border border-solid border-black">Fechar Comanda</button>
                </div>

                <div>
                  <h4 className="font-bold text-lg mt-5">Pedido</h4>
                </div>
                
                <div>
                  <ul>
                    <div>
                      <p>##/##/#### ##:##:##</p>
                      <p>"Nome Cliente"</p>
                      <p>Itens</p>
                    </div>
                    <span>
                      <li>
                        <span>
                          XX -  
                          <span>
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
      </div>

    </div>

  )
}