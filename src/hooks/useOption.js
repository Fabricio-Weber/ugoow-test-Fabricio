import { useEffect, useState } from "react"

export function useOption( arrayValues , defaultOption = 0) { 

  if(arrayValues.length < defaultOption){ 
    console.error("INVALID OPTION CALL")
  }

  const [selection, setSelection] = useState(defaultOption)
  const [list, setList] = useState(arrayValues[defaultOption])
 

  useEffect(()=>{ 

    if(arrayValues[selection] === ""){
      console.error("YOU HAVE A ERROR ON SET THIS VALUE TWO LIST, CHECK YOUR HOOK CALL")
    }else{
      setList(arrayValues[selection])
      console.log("setted list")

    }

  },[selection])

  


   return {
      setSelection,
      list
   }
}