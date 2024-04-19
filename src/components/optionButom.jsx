export function OptionButtom({ name, group }) {
  return (
    <div>
      <input className="peer sr-only" name={group} id={name} type="radio" />
      <label className="peer-checked:bg-orange-800 bg-orange-600 size-5 py-2 px-5 rounded-full transition-colors text-slate-950
      font-bold text-lg" htmlFor={name}>{name}</label>
    </div>
      
    
  )
}