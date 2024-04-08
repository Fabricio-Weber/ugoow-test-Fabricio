export function ProductItem({ id, nome, preco, tipo }) {
  return (
    <div  className="w-full h-48 bg-slate-300 scale-95 rounded-md p-4 shadow-md shadow-slate-400 ">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold text-slate-800">{nome.toUpperCase()}</h1> <p className="bg-white py-2 px-4 text-xl font-bold rounded text-slate-800">{tipo}</p>
      </div>
      <div>
        <p className="font-bold text-xl text-slate-800 relative bottom-2">Preço : <span className="text-green-600 text-2xl font-extrabold">R${preco}</span></p>
        <p className="font-medium text-slate-900 relative bottom-3">id :{id}</p>
      </div>

      {/* Actions */}
      <div className="w-full flex justify-between relative top-5 text-lg font-bold text-slate-900" >
        <button className=" bg-red-600 p-2 rounded-lg hover:brightness-75 transition-all">Cancelar</button>
        <button className=" bg-blue-800 p-2 rounded-lg hover:brightness-90 transition-all">Avançar</button>
        <button className=" bg-blue-400 p-2 rounded-lg hover:brightness-90 transition-all">Editar</button>
      </div>
    </div>

        

  )
}