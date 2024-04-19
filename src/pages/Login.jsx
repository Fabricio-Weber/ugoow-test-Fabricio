import { useRef } from "react";
import { InputText } from "../components/InputText";

export function Login() {

  const cnpj = useRef(null)
  const senha = useRef(null)

  function handleSubmit(e){  
    e.preventDefault()
    let submit = {  
      cnpj : cnpj.current.value,
      senha : senha.current.value
    }
    return JSON.stringify(submit)
  }


  return (
    <div className="w-full absolute bg-slate-100 h-full flex flex-col items-center justify-center font-inter">
      <div className="w-[25em]">
        <p className="text-center text-2xl mb-3 font-bold text-slate-900">Ugow</p>
        <form onSubmit={e=>handleSubmit(e)} className="h-auto w-[25em] rounded bg-slate-200 ring-slate-400 ring-1 p-3">
          <div className="ring-1 flex flex-col justify-around p-2 h-48 rounded ring-slate-400">
            <InputText ref={cnpj} text="" name="Cnpj"/>
            <InputText ref={senha} text="" name="Senha"/>
          </div>
          
          <input type="submit" value="entrar" className="p-2 text-slate-200 hover:bg-opacity-95 cursor-pointer transition-colors bg-slate-900 rounded-md text-bold font-bold mt-2 px-6"></input>
        </form>
        
      </div>


    </div>
  )
}