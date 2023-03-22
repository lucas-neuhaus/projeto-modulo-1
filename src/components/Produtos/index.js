import "./styles.css";


export default function Produtos( { codigo, descricao, marca, preco,} ) {
  return (
    <>
    <div className="tabela-produtos">
                 {codigo} 
              -  {descricao} - 
        Marca: {marca} -
        R${preco}
    </div>
        
    
    </>
  )
}