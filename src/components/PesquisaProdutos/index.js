import "./styles.css";

export default function PesquisaProdutos() {
    return (
    
    <>  
    <div className="pesquisa-produtos"> <h3>Pesquisar Produtos</h3>
    </div>
        
    <div className="pesquisa-produto-container"> 
      <label htmlFor>Código do Produto:</label>
      <input type="text"  />

      <label htmlFor>Quantidade:</label>
      <input type="number" min="1"  />

      <button type="button"> Adicionar </button>
    </div>
        
    </>
      )
}