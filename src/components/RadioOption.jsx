export function RadioOption( {nome, group, id, changeFood} ) {
  return (
    <label className="cursor-pointer" htmlFor={id} onClick={changeFood}>
      <input className="peer sr-only" type="radio" name={group} id={id} defaultChecked />
      <div className="peer-checked:ring-[2px] ring-slate-950 bg-slate-50 rounded-md text-xl py-1 transition-shadow">
        <p className="font-inter mx-6 my-2">{nome}</p>
      </div>
    </label>
  )
}