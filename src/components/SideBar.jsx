import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { TextOutdent, House, CashRegister, PicnicTable, SignOut, Gear, Sun } from "@phosphor-icons/react"


export function SideBar() {

  const [collapssed, setCollapsed] = useState(false)


  const handleCollpase = () => {
    setCollapsed((collapssed) => !collapssed)

  }

  function NavButtom({ pathTo, name, children }) {
    return (
      <NavLink to={pathTo} className={({ isActive }) => {
        return `flex justify-between items-center rounded-lg p-1 transition-colors font-bold font-inter text-slate-800 ${isActive ? "bg-slate-100 " : "bg-transparent"} `
      }}>
        <span className="">{children}</span> <span className="truncate">{collapssed ? "" : name}</span>
      </NavLink>
    )
  }

  function Buttom({ pathTo, name, children, color }) {
    return (
      
        <button className={`w-full h-10 hover:bg-${color}-300 rounded scale-105 text-slate-800 font-bold font-inter p-1` }>
          <Link to={pathTo} className="flex justify-between items-center w-full">{children} {collapssed ? "" : name}</Link>
         
        </button>
     

    )
  }



  return (
    <>
      <nav className={`${collapssed ? "w-14" : "w-60"} h-lvh bg-slate-300 bg-opacity-5  ring-1 ring-slate-600 shadow-inner flex flex-col justify-between p-2 relative  transition-all rounded-r-xl`}>
        <div className="w-full h-10 flex items-center justify-center bg-slate-100 rounded-xl">
          <button onClick={handleCollpase} className="w-full rounded-xl relative flex justify-center" ><TextOutdent size={32} weight="bold" color="black" /> </button>
        </div>

        <div className="w-full border-b-[1px] border-slate-900 absolute right-0 top-16"></div>
        <div className="flex flex-col justify-center w-fubutton">
          <NavButtom pathTo={"./pedidos"} name={"Pedidos"}><House size={32} weight="bold" className="text-slate-900" /></NavButtom>
          <NavButtom pathTo={"./pdv"} name={"Lançar Pedido"} ><CashRegister size={32} weight="bold" className="text-slate-900" />  </NavButtom>
          <NavButtom pathTo={"./mesas"} name={"Mesa e Comanda"} ><PicnicTable size={32} weight="bold" className="text-slate-900" /></NavButtom>
        </div>
        <div className="w-full border-b-[1px] border-slate-900 absolute right-0 bottom-44"></div>
        <div className="h-40 flex flex-col justify-around items-center rounded">
          <Buttom color="red" name="Sair" pathTo={"./sair"}> <SignOut size={28} weight="bold" className="text-red-600"/> </Buttom>
          <Buttom color="slate" name="Configurações" pathTo={"./congig"}> <Gear size={28} weight="bold" className="text-slate-900"/> </Buttom>
          <Buttom color="slate" name="Tema"> <Sun size={28} weight="bold" className="text-slate-900"/> </Buttom>
          
        </div>
      </nav>
    </>
  )
}