import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export function Index () {
   return ( 
     
     <div className="flex w-full h-dvh overflow-hidden bg-slate-200">
       <SideBar/>
       <div className="w-full shrink bg-slate-200">
          <Outlet/>
       </div>
     </div>
   )
}