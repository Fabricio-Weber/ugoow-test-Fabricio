export function DisplayAlimento({ titulo, quantidade, preco, addFood}) {
  return (
    <>
    <button className="hover:brightness-90 transition-all"  onClick={addFood}>
      <div className="w-56 h-48 ring-slate-950 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-slate-400 bg-opacity-30">
            Imagem
          </div>
          <footer className="w-full h-16 bg-slate-400 relative  bottom-14 rounded-t-md flex justify-start flex-col items-start px-3 font-inter font-semibold text-slate-900">
              <h1>{titulo}</h1>
              <div className="flex justify-between w-full">
              <p>{preco}</p>
              <p>{quantidade}Restantes</p>
              </div>
              
          </footer>
      </div>
    </button>
      
    </>
  )
}