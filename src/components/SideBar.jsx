import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { TextOutdent, House, CashRegister, PicnicTable, SignOut, Gear, Sun, Book } from "@phosphor-icons/react"
import { ThemeContext } from "../contexts/collapse_context"


export function SideBar() {
  const {collapsed, setCollapsed} = useContext(ThemeContext)


  const handleCollpase = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  function NavButtom({ pathTo, name, children }) {
    return (
      <NavLink to={pathTo} className={({ isActive }) => {
        return `flex justify-between items-center rounded-lg p-1 transition-colors font-bold font-inter text-slate-800 ${isActive ? "bg-slate-100 " : "bg-transparent"} `
      }}>
        <span className="">{children}</span> <span className="truncate">{collapsed ? "" : name}</span>
      </NavLink>
    )
  }

  function Buttom({ pathTo, name, children, color }) {
    return (

      <button className={`w-full h-10 hover:bg-${color}-300 rounded scale-105 text-slate-800 font-bold font-inter p-1`}>
        <Link to={pathTo} className="flex justify-between items-center w-full">{children} {collapsed ? "" : name}</Link>
      </button>

        
    )
  }



  return (
    <>
      <nav className={`${collapsed ? "w-14" : "w-60"} h-lvh bg-slate-200 hidden sm:flex ring-1 ring-slate-600 shadow-inner  flex-col justify-between p-2 relative  transition-all rounded-r-xl`}>
        <div className="w-full h-10 flex items-center justify-center bg-slate-100 rounded-xl">
          <button onClick={handleCollpase} className="w-full rounded-xl relative flex justify-center" ><TextOutdent size={32} weight="bold" color="black" /> </button>
        </div>

        <div className="w-full border-b-[1px] border-slate-900 absolute right-0 top-16"></div>
        <div className="flex flex-col justify-center w-fubutton">
          <NavButtom pathTo={"./pedidos"} name={"Pedidos"}><House size={32} weight="bold" className="text-slate-900" /></NavButtom>
          <NavButtom pathTo={"./pdv"} name={"Lançar Pedido"} ><CashRegister size={32} weight="bold" className="text-slate-900" />  </NavButtom>
          <NavButtom pathTo={"./mesas"} name={"Mesa e Comanda"} ><PicnicTable size={32} weight="bold" className="text-slate-900" /></NavButtom>
          <NavButtom pathTo={"./cardapio"} name={"Mesa e Comanda"} ><Book size={32} weight="bold" className="text-slate-900" /></NavButtom>
        </div>
        <div className="w-full border-b-[1px] border-slate-900 absolute right-0 bottom-44"></div>
        <div className="h-40 flex flex-col justify-around items-center rounded">
          <Buttom color="red" name="Sair" pathTo={"./sair"}> <SignOut size={28} weight="bold" className="text-red-600" /> </Buttom>
          <Buttom color="slate" name="Configurações" pathTo={"./congig"}> <Gear size={28} weight="bold" className="text-slate-900" /> </Buttom>
          <button className={`flex justify-between w-full h-10 hover:bg-slate-300 rounded scale-105 text-slate-800 font-bold font-inter p-1`}> <Sun size={28} weight="bold" className="text-slate-900" /> {collapsed ? "" : "Tema"}</button>
        </div>
      </nav>
    </>
  )
}