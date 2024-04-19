import { useRef, useState } from "react";

export function useForm(schema) {

  
  let [payMethod, setPayMethod] = useState()

  let ref = useRef(schema);
  let formInfo = ref.current
 
  function handleRadioChange(e) {
    // Atualize o valor do estado ref para o valor do radio selecionado
    ref.current.typeVenda = e.target.value;
    setPayMethod(e.target.value)
  }

  function handleTextChange(e) { 
    ref.current = {...ref.current, [e.target.name]:e.target.value}
   
  }

  function submitForm(e) {

    e.preventDefault()
    let formInfo = ref.current
    console.log(formInfo)
  }

  

  return {
    handleRadioChange,
    handleTextChange,
    submitForm,
    formInfo,
    payMethod,
  }
}