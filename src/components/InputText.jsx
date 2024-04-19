import { forwardRef } from "react"

export const InputText = forwardRef(({ text, name}, ref) => {
  return (
    <div className="flex  flex-col-reverse">
      <input ref={ref} id={name} type="text" className="peer w-full indent-5 outline-none py-1 text-md
    text-slate-900 rounded-md ring-1 ring-slate-400 
    focus-visible:ring-orange-600 invalid:ring-red-500" required defaultValue={text} />
      <label className="peer-invalid:text-red-600 text-slate-900 font-semibold" htmlFor={name}>{name}</label>
    </div>
  )
})
