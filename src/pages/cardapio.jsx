import { useState } from "react";
import produtos from "../../dbfake/produtos";
import { ArrowBendRightDown, ArrowBendRightUp } from "@phosphor-icons/react"

export function Cardapio() {
  const [query, setQuery] = useState(produtos);
  const [nameFilter, setNameFilter] = useState('');
  const [sortAsc, setSortAsc] = useState(true); // Estado para controlar a ordenação
  const [filteredByAble, setFilteredByAble] = useState(null)
  // type e outra para definir o origin ex: type'name' e origin'decrescente ou crescente' 
  // Função para alternar entre ordenação ascendente e descendente
  const toggleSortOrderID = () => {
    setSortAsc(!sortAsc);
    // Invertendo a ordem dos produtos
    sortProductsById();
  };

  const showByAbled = () => { 
     switch (filteredByAble) { 
       case false : 
         setFilteredByAble(true)
         setQuery(produtos.filter(produto => produto.ativo === true))
       break
        default :
        setFilteredByAble(false)
        setQuery(produtos)
     }
  }

  const toggleSortOrderNAME = () => {
    setSortAsc(!sortAsc);
    // Invertendo a ordem dos produtos
    sortProductsByName();
  };


  const sortProductsByName = () => {
    const sortedProducts = [...query].sort((a, b) => {
      if (sortAsc) {
        return a.nome.localeCompare(b.nome); // Ordenação ascendente
      } else {
        return b.nome.localeCompare(a.nome); // Ordenação descendente
      }
    });
    setQuery(sortedProducts);
  };

  const sortProductsById = () => {
    const sortedProducts = [...query].sort((a, b) => {
      if (sortAsc) {
        return a.id - b.id; // Ordenação ascendente
      } else {
        return b.id - a.id; // Ordenação descendente
      }
    });
    setQuery(sortedProducts);
  };

  return (
    <>
      <div className="w-full h-full p-5">
        <p className="text-md sm:text-5xl font-inter font-bold text-slate-900 transition-all">Cardápio</p>
        <div className="w-full h-[89dvh] rounded-md mt-2 bg-slate-300 pt-16">
          <div className="w-full h-14 sm:w-4/5 m-auto border-2 flex justify-end gap-6 items-center">
            <input type="text" onChange={e=> setNameFilter(e.target.value)} value={nameFilter}/>
            <button>Novo Grupo</button>
            <button>Novo Produto</button>
          </div>
          <table className="w-full sm:w-4/5 m-auto border-2">
            <tr className="border-2">
              <th className="border-2" onClick={showByAbled}>Ativo ?</th>
              <th className="inline items-center w-8 hover:underline cursor-pointer" onClick={toggleSortOrderID}>ID{sortAsc ? <ArrowBendRightUp className="inline" size={16}/> : <ArrowBendRightDown className="inline" size={16}/>}</th>
              <th className="border-2" onClick={toggleSortOrderNAME}>Item</th>
              <th className="border-2">Valor</th>
              <th className="border-2">Estoque</th>
              <th className="border-2">Ações</th>
            </tr>

            {query.filter(produto => nameFilter.length === 0 ? produto === produto : produto.nome.substring(0, nameFilter.length) === nameFilter ).map(produto => {
            
              return (
                <tr key={produto.id}>
                  <td><input type="checkbox" name="" id="" defaultChecked={produto.ativo}/></td>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.preço}</td>
                  <td>{produto.quantidadeEstoque}</td>
                  <td>
                    <button>Aditar</button>
                    <button>Apagar</button>
                  </td>
                </tr>
              )
            })}

          </table>
        </div>
      </div>

    </>
  );
}
