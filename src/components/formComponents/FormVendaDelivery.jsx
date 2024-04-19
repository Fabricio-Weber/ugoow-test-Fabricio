import { useForm } from "../../hooks/useForm";
import { Phone, User, Envelope, Money } from "@phosphor-icons/react";
import { RadioOption } from "../RadioOption";
import { useEffect } from "react";

export function FormVenda( {  } ) {
  let { handleRadioChange, handleTextChange, submitForm, formInfo, payMethod } = useForm({ telefone: "", nome: "", email: "", cupom: "", typeVenda: "" })

  function Input({ name, label, children, textAtualize }) {
    return (
      <label className="flex flex-col h-20 w-full" htmlFor={name}>
        <div className="font-inter flex items-center font-bold text-slate-900">
          {children} {label}
        </div>
        <input className="h-9 rounded-lg p-2 text-xl font-inter font-semibold outline-none focus-visible:ring-1 ring-slate-900" id={name} onChange={textAtualize} type="text" name={name} />
      </label>
    )

  }

  return (
    <form onSubmit={e => submitForm(e)} className="w-full mt-1 bg-slate-300 rounded-lg p-3  ">

      

      <Input textAtualize={e=> handleTextChange(e)} name={"telefone"} label={"Telefone:"}></Input>
      <Input textAtualize={e=> handleTextChange(e)} name={"nome"} label={"Nome:"}></Input>
      <Input textAtualize={e=> handleTextChange(e)} name={"email"} label={"E-mail:"}></Input>
      <Input textAtualize={e=> handleTextChange(e)} name={"cupom"} label={"Cupom:"}></Input>
      <div className=" flex justify-start flex-wrap text-pretty gap-3">
        <RadioOption size={"sm"} group={"typeVenda"} nome="pix"  changeFood={e=> handleRadioChange(e)} />
        <RadioOption size={"sm"} group={"typeVenda"} nome="credito"  changeFood={e => handleRadioChange(e)} />
        <RadioOption size={"sm"} group={"typeVenda"} nome="débito"  changeFood={e => handleRadioChange(e)} />
        <RadioOption size={"sm"} group={"typeVenda"} nome="dinheiro"  changeFood={e => handleRadioChange(e)} />
      </div>
      <div className="min-h-12 flex items-center w-full">
          {payMethod === "dinheiro" ? <input className="w-full outline-none focus-visible:ring-1 ring-slate-950 h-8 my-3" type="number" placeholder="Troco para..."/> : ""}
      </div>

      <input className="w-full bg-blue-700 p-2 text-slate-200 font-bold rounded-lg hover:brightness-125 active:bg-blue-900 transition-[filter]" type="submit" />
    </form >

  );
}
