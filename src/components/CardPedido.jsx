import { useEffect, useState } from "react"

export function CardPedido( {nome, preco, id, quantidade, changeValue, remove}) { 

  let [count, setCount] = useState(quantidade)

  useEffect(()=>{
    setCount(quantidade)
  },[quantidade])

  function handleValue(type) { 
     switch(type) {
      case "sub" :
        if(count > 1){
          setCount(count = count - 1)
        }
        break
      case "sum" :
        setCount(count = count + 1)
        break
     }
     changeValue(id, count)
  }

  return ( 
    <div className="w-[99%] h-32 bg-slate-300 mt-4 rounded-lg flex relative" >
        <button onClick={remove}  className="absolute right-2 top-2 size-6 bg-red-600 rounded-lg text-slate-100 font-bold font-inter" >X</button>
        <div className="size-32 bg-slate-50 rounded-lg"></div>
        <p className="w-52 absolute top-3 left-3 text-xl font-bold font-inter text-slate-950">{nome}</p>
        <p className="absolute bottom-6 left-3 text-3xl font-extrabold font-inter text-green-800">R${preco}</p>
        <div></div>
    </div>
  )
}