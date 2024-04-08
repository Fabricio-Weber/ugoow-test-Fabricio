import { useEffect, useRef, useState } from "react";
import { CardPedido } from "../components/CardPedido"; ""
import { RadioOption } from "../components/RadioOption"
import { DisplayAlimento } from "../components/DisplayAlimento";
import { MagnifyingGlass } from "@phosphor-icons/react"

export function PDV() {

  let comidas = [
    {
      titulo: "Pizza de Calabresa",
      quantidade: 12,
      preco: 13.43,
      id: "x",
      tipo: "pizza"
    },
    {
      titulo: "Pizza de Frango",
      quantidade: 8,
      preco: 12.99,
      id: "y",
      tipo: "pizza"
    },
    {
      titulo: "Hambúrguer de Carne",
      quantidade: 20,
      preco: 15.50,
      id: "z",
      tipo: "hamburger"
    },
    {
      titulo: "Hambúrguer Vegetariano",
      quantidade: 10,
      preco: 14.99,
      id: "w",
      tipo: "hamburger"
    },
    {
      titulo: "Coca-Cola",
      quantidade: 30,
      preco: 5.99,
      id: "v",
      tipo: "bebida"
    },
    {
      titulo: "Guaraná",
      quantidade: 25,
      preco: 4.99,
      id: "u",
      tipo: "bebida"
    },
    {
      titulo: "Pizza Margherita",
      quantidade: 15,
      preco: 11.99,
      id: "t",
      tipo: "pizza"
    },
    {
      titulo: "Hambúrguer de Frango",
      quantidade: 18,
      preco: 13.50,
      id: "s",
      tipo: "hamburger"
    },
    {
      titulo: "Fanta Laranja",
      quantidade: 20,
      preco: 4.99,
      id: "r",
      tipo: "bebida"
    },
    {
      titulo: "Pizza Portuguesa",
      quantidade: 14,
      preco: 14.99,
      id: "q",
      tipo: "pizza"
    },
    {
      titulo: "Hambúrguer Duplo",
      quantidade: 12,
      preco: 18.99,
      id: "p",
      tipo: "hamburger"
    },
    {
      titulo: "Água Mineral",
      quantidade: 40,
      preco: 2.50,
      id: "o",
      tipo: "bebida"
    },
    {
      titulo: "Pizza Quatro Queijos",
      quantidade: 10,
      preco: 16.99,
      id: "n",
      tipo: "pizza"
    },
    {
      titulo: "Hambúrguer de Picanha",
      quantidade: 22,
      preco: 17.99,
      id: "m",
      tipo: "hamburger"
    },
    {
      titulo: "Sprite",
      quantidade: 25,
      preco: 4.99,
      id: "l",
      tipo: "bebida"
    }
  ];

  const vendaFinal = useRef()

  const [pedidos, setPedidos] = useState([])
  const [foodtype, setFoodtpye] = useState('todos')
  const [total, setTotal] = useState()



  useEffect(() => {
    setTotal(pedidos.map(pedido => pedido.preco * pedido.quantidade).reduce((acc, temp) => acc + temp, 0).toFixed(2))

  }, [pedidos])

  function handleAdd(value) {
    let pedido = {
      nome: value.titulo,
      preco: value.preco,
      id: value.id,
      quantidade: 1
    };

    const index = pedidos.findIndex((pedidoE) => pedidoE.id === pedido.id);

    if (index === -1) {
      // Se o pedido ainda não existe, adicione-o
      setPedidos([...pedidos, pedido]);
    } else {
      // Se o pedido já existe, atualize a quantidade
      const novoPedido = [...pedidos];
      novoPedido[index].quantidade++;
      setPedidos(novoPedido);
    }
  }

  function findIndexPedido(id, quantidade, soma) {

    const novoPedido = [...pedidos]
    let index = pedidos.findIndex(pedido => pedido.id === id)
    novoPedido[index].quantidade = quantidade

    setPedidos(novoPedido)

  }

  function finalizandoVenda() {
    let produtosVenda = vendaFinal.current.children
    for (let x = 0; x > produtosVenda.length; x++) {
      console.log(produtosVenda[x].textContent)
    }
  }

  function removePedido(id) {
    setPedidos(pedidos.filter(pedido => pedido.id !== id))
  }

  return (
    <div className="flex w-full h-full ">
      <div className="basis-4/5 h-full p-6">
        <div className="flex w-full justify-between ">
          <div>
            <h1 className="text-3xl font-inter text-slate-800 font-semibold">Pedidos</h1>
            <p className="text-lg text-slate-500 font-normal -translate-y-2">12/12/12 Fevereiro</p>
          </div>
          <div className="relative">
            <MagnifyingGlass className="absolute right-1 top-2 text-slate-950" size={28} />
            <input className="h-10 w-72 rounded-md bg-slate-100 ring-[1px] ring-slate-950 outline-none indent-3 text-slate-950" type="text" />
          </div>
        </div>


        {/* Header e opções */}
        <div className="w-full flex gap-3 mt-3">
          <RadioOption nome={"pizza"} group={"comidas"} changeFood={() => setFoodtpye('pizza')} />
          <RadioOption nome={"hamburger"} group={"comidas"} changeFood={() => setFoodtpye('hamburger')} />
          <RadioOption nome={"bebidas"} group={"comidas"} changeFood={() => setFoodtpye('bebida')} />
          <RadioOption nome={"esfirras"} group={"comidas"} changeFood={() => setFoodtpye('esfirras')} />
          <RadioOption nome={"todos"} group={"comidas"} changeFood={() => setFoodtpye('todos')} />
        </div>


        <h1 className="text-3xl font-bold text-slate-900 my-2 font-inter">{foodtype.toUpperCase()}</h1>

        <div className="ring-1 ring-slate-950 h-[76%] rounded-lg overflow-x-auto flex gap-2 flex-wrap items-start p-2 w-full">
          {comidas.filter(comida => foodtype === 'todos' ? comida === comida : comida.tipo === foodtype).map(comida => {
            return <DisplayAlimento key={comida.id} titulo={comida.titulo} preco={comida.preco} addFood={() => handleAdd(comida)} />
          })}
        </div>

      </div>


      {/* Essa é a parte da side bar */}
      <div className="w-[20em] relative  h-full ring-1 ring-slate-900 rounded-l-xl bg-opacity-50 bg-slate-200 shadow-black p-5 overflow-hidden">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold font-inter">Mesa:</h1>
          <select className="ring-1 ring-slate-950 px-3" name="" id="">
            <option value="MESA1">Mesa 1</option>
            <option value="MESA2">Mesa 2</option>
          </select>
        </div>


        <div className="flex flex-wrap gap-2 my-2 w-full">
          <RadioOption nome="Delivery" group={"tipoVenda"}/>
          <RadioOption nome="Retirada" group={"tipoVenda"}/>
          <RadioOption nome="Local" group={"tipoVenda"}/>
        </div>


        <div ref={vendaFinal} className="h-[33em] overflow-x-auto">
          {pedidos.map(pedido => {
            return <CardPedido key={pedido.id} nome={pedido.nome} preco={pedido.preco} id={pedido.id} quantidade={pedido.quantidade} changeValue={findIndexPedido} remove={() => removePedido(pedido.id)} />
          })}
        </div>


        <div className="w-full h-56 bg-slate-300 absolute left-0 bottom-0 p-3">
          <h1 className="text-3xl font-bold text-slate-800">Total : {total} </h1>
          <button onClick={finalizandoVenda} className="absolute bottom-3 w-full bg-yellow-400 left-0 h-14 rounded-lg">Encerrar Compra</button>
        </div>
      </div>

    </div>
  )
}