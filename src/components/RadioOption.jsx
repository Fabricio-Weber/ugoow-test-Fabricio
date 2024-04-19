export function RadioOption( {nome, group, id, changeFood} ) {

  

  return (
    <label className="cursor-pointer" htmlFor={id}>
      <input onClick={e=>changeFood(e)} className="peer sr-only" type="radio" value={nome} name={group} id={id}/>
      <div className={`peer-checked:ring-[2px] ring-slate-950 bg-slate-50 rounded-md text-sm sm:text-md py-1 transition-shadow`}>
        <p className="font-inter mx-6 my-1 font-bold text-slate-900">{nome}</p>
      </div>
    </label>
  )
}